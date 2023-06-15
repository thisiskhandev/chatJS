$(document).ready(function ($) {
  jQuery("#runFun").click(function () {
    let lenOfChatBox = jQuery(".chat_box_main").length;
    let chatDuration = 3000;
    let totalTimeDuration = chatDuration * lenOfChatBox - chatDuration;

    jQuery(".agent").each(function (ind, elem) {
      let duration = chatDuration * ind;
      jQuery(elem).delay(duration).slideDown(300);
      //   console.warn(duration);
    });
    setTimeout(() => {
      jQuery(".user").each(function (ind, elem) {
        let duration = chatDuration * ind;
        jQuery(elem).delay(duration).slideDown(350);
      });
      jQuery(".checked img").each(function (ind, elem) {
        let duration = chatDuration * ind;
        jQuery(elem).delay(duration).fadeIn(350);
      });
      jQuery(".check_content").each(function (ind, elem) {
        let duration = chatDuration * ind;
        setTimeout(function () {
          jQuery(elem).css("color", "#000");
        }, duration);
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

  jQuery(chatData).map(function (ind, data) {
    let chats = `
    <section class="check_box">
            <div class="checked">
              <img
                src="./assets/images/check-mark.png"
                alt="Check Mark"
                style="max-width: 100%"
                width="30"
              />
            </div>
            <div class="check_content">
              <h5><strong>${data.infoTitle}</strong></h5>
              <p>${data.infoMsg}</p>
            </div>
          </section>
    `;
    jQuery(".greeting_col").append(chats);
  });
});

// console.table(chatData)
