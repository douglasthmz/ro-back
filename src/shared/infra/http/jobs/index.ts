import cron from 'cron';

const mondayJobs = new cron.CronJob(
  '25 31 21 * * MON',
  () => {
    console.log('rodei certinho CronJob');
  },
  null,
  true,
  'America/Sao_Paulo',
);

mondayJobs.start();
