import {Sequelize, DataTypes } from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import Answer from '@models/answer';
import Course from '@models/course';
import Current_Game from '@models/currentgame';
import External_User from '@models/externaluser';
import Folder from '@models/folder';
import Internal_User from '@models/internaluser';
import Module from '@models/module';
import Question from '@models/question';
import Quiz from '@models/quiz';
import { logger } from '@utils/logger';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Courses: Course(sequelize, DataTypes),
  Modules: Module(sequelize, DataTypes),
  Folders: Folder(sequelize, DataTypes),
  Quizzes: Quiz(sequelize, DataTypes),
  Internal_Users: Internal_User(sequelize, DataTypes),
  Questions: Question(sequelize, DataTypes),
  Answers: Answer(sequelize, DataTypes),
  Current_Games: Current_Game(sequelize, DataTypes),
  External_Users: External_User(sequelize, DataTypes),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
