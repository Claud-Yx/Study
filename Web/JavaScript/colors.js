var Links = {
    setColor: function (color) {
        var a_list = document.querySelectorAll("a");
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = color;
            ++i;
        }
    },
};

var Body = {
    setColor: function (color) {
        document.querySelector("body").style.color = color;
    },

    setBackgroundColor: function (color) {
        document.querySelector("body").style.backgroundColor = color;
    },
};

function nightDayHandler(self) {
    var target = document.querySelector("body");

    if (self.value === "Night") {
        Body.setColor("white");
        Body.setBackgroundColor("black");
        self.value = "Day";
        Links.setColor("powderblue");
    } else {
        Body.setColor("black");
        Body.setBackgroundColor("white");
        self.value = "Night";
        Links.setColor("blue");
    }
}
