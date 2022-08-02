class HomeController {
  home(req, res, next) {
    res.render("home", {
      products: [
        {
          id: 1,
          title: "sản phẩm 1",
        },
        {
          id: 2,
          title: "sản phẩm 2",
        },
      ],
      users: [
        {
          id: 1,
          title: "users 1",
        },
        {
          id: 2,
          title: "users 2",
        },
      ],
    });
  }
}

module.exports = new HomeController();
