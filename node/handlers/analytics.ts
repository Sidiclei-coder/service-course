export async function analytics(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { analytics },
    } = ctx
    ctx.status = 200
    //ctx.body = 'OK'
    ctx.body = await analytics.getLiveUsers()
    ctx.set('cache-control', 'no-cache')
  await next()
}
// após fazer isso de um vtex link não precisa acrescentar {your workspace}--appliancetheme.myvtex.com/_v/app/analytics/realTime