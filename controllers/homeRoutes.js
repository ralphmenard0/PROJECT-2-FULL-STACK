const router = require("express").Router();
const { Gifts: Gift, User } = require("../models");
const { update } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/userlanding");
    return;
  }
  res.render("login");
});

// Use withAuth middleware to prevent access to route
router.get("/userlanding", withAuth, async (req, res) => {
  try {
    const giftData = await Gift.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    // Serialize data so the template can read it
    const gifts = giftData.map((gift) => gift.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("userlanding", {
      gifts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newGift", withAuth, async (req, res) => {
  try {
    res.render("newGift", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/userlanding", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
    });

    const user = userData.get({ plain: true });

    res.render("userlanding", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/userlanding");
    return;
  }

  res.render("login");
});

module.exports = router;
