var userList = [
    {
      firstName: "민상",
      lastName: "유",
      email: "yu@gmail.com",
    },
    {
      firstName: "나래",
      lastName: "박",
      email: "park@gmail.com",
    },
    {
      firstName: "숙",
      lastName: "김",
      email: "kim@gmail.com",
    },
    {
      firstName: "석진",
      lastName: "지",
      email: "ji@gmail.com",
    },
  ];

  var userList2 = userList.map((user) => {
    return {
        fullName : user.lastName + user.firstName,
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
    }
  });

  console.log(userList2);