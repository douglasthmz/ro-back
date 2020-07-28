import cron from 'cron';
import SetupEveningAfter from './SetupEveningAfter';
import SetupMorning from './SetupMorning';
import SetupSaturday from './SetupSaturday';
import SetupSunday from './SetupSunday';

const morningMidweekJobs = new cron.CronJob(
  '0 0 8 * * MON-FRI',
  async () => {
    await SetupEveningAfter();
  },
  null,
  true,
  'America/Sao_Paulo',
);

morningMidweekJobs.start();

const afterMidweekJobs = new cron.CronJob(
  '0 0 16 * * SUN-THU',
  async () => {
    await SetupMorning();
  },
  null,
  true,
  'America/Sao_Paulo',
);

afterMidweekJobs.start();

const weekendJobs = new cron.CronJob(
  '0 0 21 * * FRI',
  async () => {
    await SetupSaturday();
    await SetupSunday();
  },
  null,
  true,
  'America/Sao_Paulo',
);

weekendJobs.start();
