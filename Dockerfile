FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /medaccess-front
COPY package.json package-lock.json ./
RUN npm install 

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /medaccess-front
COPY --from=deps /medaccess-front/node_modules ./node_modules
COPY . . 
RUN npm run build 

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /medaccess-front
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /medaccess-front/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce the size of the image
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /medaccess-front/.next/standalone ./ 
COPY --from=builder --chown=nextjs:nodejs /medaccess-front/.next/static ./.next/static

USER nextjs

EXPOSE 6445
ENV PORT 6445

CMD ["node", "server.js"]
