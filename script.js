//callback hell function

const tim = () => {
  setTimeout(() => {
    document.getElementById("print").innerText = "10";
    setTimeout(() => {
      document.getElementById("print").innerText = "9";
      setTimeout(() => {
        document.getElementById("print").innerText = "8";
        setTimeout(() => {
          document.getElementById("print").innerText = "7";
          setTimeout(() => {
            document.getElementById("print").innerText = "6";
            setTimeout(() => {
              document.getElementById("print").innerText = "5";
              setTimeout(() => {
                document.getElementById("print").innerText = "4";
                setTimeout(() => {
                  document.getElementById("print").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("print").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("print").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("print").innerText =
                          "Happy Independence Day";
                      });
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
tim();
