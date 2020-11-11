const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");
const User = require("../models/user");
AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
});
const ADMIN = {
  email: process.env.ADMIN_EMAIL || "admin@gmail.com",
  password: process.env.ADMIN_PASS || "adminJS",
};
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "admin",
  cookiePassword: process.env.ADMIN_COOKIE_PASS || "admin1123",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});
module.exports = router;
