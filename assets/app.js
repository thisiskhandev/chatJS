$(document).ready(function ($) {
  // DEBUGGING
  let time = 0;
  setInterval(() => {
    time = time + 1;
    jQuery("#timer").text(time);
  }, 1000);

  jQuery("#runFun").click(function () {});
  jQuery("#resetFun").click(function () {
    jQuery(".chat_box").fadeOut(300);
    jQuery(".checked img").fadeOut(300);
    jQuery(".check_content").css("color", "gray");
  });

  let lenOfChatBox = chatData.length;
  let chatDuration = 2000;
  let totalTimeDuration = chatDuration * lenOfChatBox;
  let firstDelayUser = chatData[0].agent.length;
  firstDelayUser = firstDelayUser * chatDuration - chatDuration + 2000;
  // Display Chat
  function chatDisplay() {
    setTimeout(function () {
      jQuery(".chat_box.user:not(.user+.user)").addClass("user_first_node");
      jQuery(".chat_box").each(function (ind, elem) {
        let duration = chatDuration * ind;
        jQuery(elem).delay(duration).slideDown(300);
        setTimeout(() => {
          jQuery(elem).addClass("activated");
          // jQuery(".checked img").each(function (ind, elem) {
          //   let duration = chatDuration * ind;
          //   jQuery(elem).delay(duration).fadeIn(350);
          // });
          // jQuery(".check_content").each(function (ind, elem) {
          //   let duration = chatDuration * ind;
          //   setTimeout(function () {
          //     jQuery(elem).css("color", "#000");
          //   }, duration);
          // });
        }, duration);
      });
    }, 1000);

    // setTimeout(function () {
    //   jQuery(".checked img").each(function (ind, elem) {
    //     let duration = chatDuration * ind;
    //     jQuery(elem).delay(duration).fadeIn(350);
    //   });
    //   jQuery(".check_content").each(function (ind, elem) {
    //     let duration = chatDuration * ind;
    //     setTimeout(function () {
    //       jQuery(elem).css("color", "#000");
    //     }, duration);
    //   });
    // }, firstDelayUser);
  }
  chatDisplay();

  // Reset Loop after Total Time Duration completes
  function resetFun() {
    // Calling Display Chat function
    setTimeout(function () {
      jQuery(".chat_box").fadeOut(300);
      jQuery(".checked img").fadeOut(300);
      jQuery(".check_content").css("color", "gray");
      chatDisplay();
    }, totalTimeDuration);
  }
  // resetFun();

  // Data Mapping
  jQuery(chatData).map(function (ind, data) {
    let agentChatBox = "";
    data.agent.forEach(function (agentMsgArr, agentIndex) {
      agentChatBox += `
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
          ${agentMsgArr}
        </h6>
      </div>
    </section>
    `;
    });

    let userChatBox = "";
    data.agent.forEach(function (userMsgArr, userIndex) {
      userChatBox += `
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
        <h4>Visitor:</h4>
        <h6>${userMsgArr}</h6>
      </div>
    </section>
    `;
    });

    let chats = `
    <main class="chat_box_main">
            ${
              data.agent.length > 1
                ? agentChatBox
                : `
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
                `
            }

            ${
              data.user.length > 1
                ? userChatBox
                : `
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
                <h4>Visitor:</h4>
                <h6>${data.user}</h6>
              </div>
            </section>
                `
            }
            </main>`;

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

// console.log(chatData[0].agent[0])
