$(document).ready(function ($) {
  jQuery("#runFun").click(function () {
    // let lenOfChatBox = jQuery(".chat_box_main").length;
    let chatDuration = 3000;
    jQuery(".agent").each(function (ind, elem) {
      let duration = chatDuration * ind;
      jQuery(elem).delay(duration).slideDown(300);
    });

    setTimeout(() => {
      jQuery(".user").each(function (ind, elem) {
        let duration = chatDuration * ind;
        jQuery(elem).delay(duration).slideDown(350);
      });
    }, 1000);
  });

  jQuery(chatData).map(function (ind, data) {
    let chats = `
    <main class="chat_box_main">
            <section class="chat_box agent">
              <div class="avatar">
                <img
                  src="./assets/images/agent.jpeg"
                  alt="Agent"
                  width="60"
                  style="max-width: 100%"
                />
              </div>
              <div class="msg">
                <h4>Agent:</h4>
                <h6>
                  ${data.agent}
                </h6>
              </div>
            </section>

            <section class="chat_box user">
              <div class="avatar">
                <img
                  src="./assets/images/user.jpeg"
                  alt="User"
                  width="60"
                  style="max-width: 100%"
                />
              </div>
              <div class="msg">
                <h4>John Kardy:</h4>
                <h6>${data.user}</h6>
              </div>
            </section>
          </main>
    `;
    jQuery(".main_chat").append(chats);
  });
});

// console.table(chatData)
