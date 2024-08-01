import dotenv from "dotenv";
dotenv.config();

module.exports = {
  dialect: "postgres",
  url: process.env.DATABASE_URL,
  define: {
    timestamps: true,
    undescored: true,
  },
};
