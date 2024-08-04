"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("tasks", [
      {
        title: "Task 1",
        description: "Description for task 1",
        done: true,
        init_date: "2023-01-01T00:00:00Z",
        end_date: "2023-01-02T00:00:00Z",
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        done: false,
        init_date: "2023-02-01T00:00:00Z",
        end_date: null,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        done: true,
        init_date: null,
        end_date: null,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        done: false,
        init_date: "2023-04-01T00:00:00Z",
        end_date: "2023-04-05T00:00:00Z",
      },
      {
        title: "Task 5",
        description: "Description for task 5",
        done: true,
        init_date: "2023-05-01T00:00:00Z",
        end_date: "2023-05-03T00:00:00Z",
      },
      {
        title: "Task 6",
        description: "Description for task 6",
        done: false,
        init_date: null,
        end_date: "2023-06-01T00:00:00Z",
      },
      {
        title: "Task 7",
        description: "Description for task 7",
        done: true,
        init_date: "2023-07-01T00:00:00Z",
        end_date: null,
      },
      {
        title: "Task 8",
        description: "Description for task 8",
        done: false,
        init_date: "2023-08-01T00:00:00Z",
        end_date: "2023-08-02T00:00:00Z",
      },
      {
        title: "Task 9",
        description: "Description for task 9",
        done: true,
        init_date: null,
        end_date: null,
      },
      {
        title: "Task 10",
        description: "Description for task 10",
        done: false,
        init_date: "2023-10-01T00:00:00Z",
        end_date: "2023-10-05T00:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("tasks", null, {});
  },
};
