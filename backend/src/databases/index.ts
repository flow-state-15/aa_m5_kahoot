import { Sequelize, DataTypes } from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
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

const Courses = Course(sequelize, DataTypes);
const Modules = Module(sequelize, DataTypes);
const Folders = Folder(sequelize, DataTypes);
const Quizzes = Quiz(sequelize, DataTypes);
const Internal_Users = Internal_User(sequelize, DataTypes);
const Questions = Question(sequelize, DataTypes);
const Answers = Answer(sequelize, DataTypes);
const Current_Games = Current_Game(sequelize, DataTypes);
const External_Users = External_User(sequelize, DataTypes);

Courses.hasMany(Modules, { foreignKey: 'courseId' });
Courses.hasMany(Quizzes, { foreignKey: 'courseId' });
Modules.hasMany(Folders, { foreignKey: 'moduleId' });
Modules.hasMany(Quizzes, { foreignKey: 'moduleId' });
Folders.hasMany(Quizzes, { foreignKey: 'folderId' });
Quizzes.hasMany(Current_Games, { foreignKey: 'quizId' });
Internal_Users.hasMany(Current_Games, { foreignKey: 'hostId' });
Questions.hasMany(Answers, { foreignKey: 'questionId' });
Questions.hasMany(Current_Games, { foreignKey: 'currentQuestion' });
Current_Games.hasMany(External_Users, { foreignKey: 'gameId' });

const DB = {
  Courses,
  Modules,
  Folders,
  Quizzes,
  Internal_Users,
  Questions,
  Answers,
  Current_Games,
  External_Users,
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
