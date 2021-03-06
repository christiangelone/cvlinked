import { Router, Request, Response } from 'express';
import InfoRouter from './info'
import HealthRouter from './health';
import EnvRouter from './env';
import DocsRouter from './docs';
import LinkedInRouter from './linkedin';

const router: Router = Router();
router.get('/', (req: Request, res: Response) => res.send(`
  <head>
    <meta charset="utf-8">
    <link rel="icon" sizes="32x32" type="image/png" href="/favicon.png">
    <title>${ process.env.API_NAME } API</title>
  </head>
  <body>
    <h2 style="font-size: 80px; color: #28AF5C;text-align: center; margin-top: 100px;">
      Welcome to ${ process.env.API_NAME } API
    </h2>
    <div style="text-align: center;">
      <img style="width: 256px;height: 256px;" src="/favicon.png"/>
    </div>
    <p style="font-size: 24px; color: black;text-align: center; margin-top: 20px;">
      <b>Environment:</b> ${ process.env.NODE_ENV }
    </p>
  </body>
`));

// ========== ADD YOUR ROUTERS HERE ==========

  router.use(LinkedInRouter);
  router.use(InfoRouter);
  router.use(HealthRouter);
  router.use(EnvRouter);
  router.use(DocsRouter)

// ========== ADD YOUR ROUTERS HERE ===========

const ApiRouter: Router = router;
export default ApiRouter;