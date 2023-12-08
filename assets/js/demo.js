(function ($) {
  function aaa() {
    if (window.config && Object.keys(window.config).length > 0) {
      var item = window.config;
      // 公司名渲染
      var logoElement = document.getElementById("logo");
      logoElement.textContent = item.LogoText;

      //首屏背景图渲染
      var heroSection = document.getElementById("hero");
      heroSection.style.background = "url(" + item.FirstImage + ") top center";
      heroSection.style.backgroundSize = "cover";
      heroSection.style.position = "relative";

      //首屏h1标题
      $("#hreoh1").text(item.hreoH1);
      //首屏h2标题
      $("#hreoh2").text(item.hreoH2);

      // 选择父节点
      const parentContainer = document.querySelector(
        ".row.gy-4.mt-5.justify-content-center"
      );

      // 定义图标数据
      const iconData = [
        { iconClass: "ri-store-line", title: "Lorem Ipsum" },
        { iconClass: "ri-bar-chart-box-line", title: "Dolor Sitema" },
        { iconClass: "ri-calendar-todo-line", title: "Sedare Perspiciatis" },
        { iconClass: "ri-paint-brush-line", title: "Magni Dolores" },
        { iconClass: "ri-database-2-line", title: "Nemos Enimade" },
      ];

      const updatedIconData = iconData.map((data, index) => {
        return { ...data, title: item.FirstFrame[index] };
      });

      // 循环创建并添加元素
      updatedIconData.forEach((data) => {
        // 创建新的子节点
        const newChild = document.createElement("div");
        newChild.classList.add("col-xl-2", "col-md-4");

        // 创建 icon-box
        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box");
        newChild.appendChild(iconBox);

        // 创建图标元素
        const icon = document.createElement("i");
        icon.classList.add(data.iconClass);
        iconBox.appendChild(icon);

        // 创建标题元素
        const title = document.createElement("h3");
        const titleLink = document.createElement("a");
        titleLink.href = "";
        titleLink.textContent = data.title;
        title.appendChild(titleLink);
        iconBox.appendChild(title);

        // 将新的子节点添加到父节点中
        parentContainer.appendChild(newChild);
      });
      // ---------------------第二部分内容-----------------------------
      // var second_1 = document.getElementById("second_1");
      // second_1.textContent = item.second_title1;
      $("#second_1").text(item.second_title1);
      $("#second_2").text(item.second_title2);

      var second_3 = document.getElementById("second_3");
      second_3.textContent = item.second_title3[0];
      var second_3 = document.getElementById("second_3_1");
      second_3.textContent = item.second_title3[1];
      var second_3 = document.getElementById("second_3_2");
      second_3.textContent = item.second_title3[2];

      var second_4 = document.getElementById("second_4");
      second_4.textContent = item.second_title4;

      //-------------------------第三部分内容 -----------------------------------------------------------
      const three_container = document.querySelector(".col-lg-6");
      //   const threeDescription = item.three_description;
      //   const threeIcon = item.three_icon;
      //   const threeTitle = item.three_title;
      const { three_description, three_icon, three_title } = item;
      // console.log(three_description);

      for (let i = 0; i < three_description.length; i++) {
        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box", "mt-5");
        iconBox.setAttribute("data-aos", "zoom-in");
        iconBox.setAttribute("data-aos-delay", "150");

        const iconElement = document.createElement("div");
        iconElement.classList.add("icon");
        const iconI = document.createElement("i");
        iconI.className = three_icon[i];
        iconElement.appendChild(iconI);

        const heading = document.createElement("h4");
        heading.textContent = three_title[i];

        const descriptionPara = document.createElement("p");
        descriptionPara.textContent = three_description[i];

        iconBox.appendChild(iconElement);
        iconBox.appendChild(heading);
        iconBox.appendChild(descriptionPara);

        three_container.appendChild(iconBox);
        // three_container.appendChild(iconBox);
      }

      //   ------------------------------第四部分内容-----------------------------------
      $("#four_h2").text(item.four_h2);
      $("#four_p").text(item.four_p);
      const four_container = document.querySelector(".four_row");
      const { four_content, four_icon, four_title } = item;

      for (let i = 0; i < four_content.length; i++) {
        const col = document.createElement("div");
        col.classList.add(
          "col-lg-4",
          "col-md-6",
          "d-flex",
          "align-items-stretch"
        );
        col.setAttribute("data-aos", "zoom-in");
        col.setAttribute("data-aos-delay", `${100 * (i + 1)}`);

        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box");

        const iconElement = document.createElement("div");
        iconElement.classList.add("icon");
        const iconI = document.createElement("i");
        iconI.className = four_icon[i];
        iconElement.appendChild(iconI);

        const heading = document.createElement("h4");
        const link = document.createElement("a");
        link.href = "";
        link.textContent = four_title[i];
        heading.appendChild(link);

        const descriptionPara = document.createElement("p");
        descriptionPara.textContent = four_content[i];

        iconBox.appendChild(iconElement);
        iconBox.appendChild(heading);
        iconBox.appendChild(descriptionPara);

        col.appendChild(iconBox);
        four_container.appendChild(col);
      }

      // ------------------------------第五块内容------------------------------------------
      $("#five_h3").text(item.five_title);
      $("#five_p").text(item.five_content);
      $("#five_a").text(item.five_button);

      // -----------------------------------Portfolio Section 第六块内容-------------------------------------------
      $("#six_h2").text(item.six_h2);
      $("#six_p").text(item.six_p);
      $("#six_h3").text(item.six_h3);
      $("#six_p_2").text(item.six_p_2);

      const six_container = document.querySelector(".productData");

      for (let i = 0; i < item.six_iconClass.length; i++) {
        const six_iconClass = item.six_iconClass[i];
        const six_iconClass_2 = item.six_iconClass_2[i];

        const counterStart = item.six_counterStart[i];
        const counterEnd = item.six_counterEnd[i];
        const counterDuration = item.counterDuration[i];
        const title = item.six_title[i];
        const description = item.six_description[i];

        const six_col = document.createElement("div");
        six_col.classList.add(
          "col-md-6",
          "d-md-flex",
          "align-items-md-stretch"
        );

        const countBox = document.createElement("div");
        countBox.classList.add("count-box");

        const icon = document.createElement("i");
        icon.classList.add(six_iconClass);
        icon.classList.add(six_iconClass_2);
        const counter = document.createElement("span");
        counter.setAttribute("data-purecounter-start", counterStart);
        counter.setAttribute("data-purecounter-end", counterEnd);
        counter.setAttribute("data-purecounter-duration", counterDuration);
        counter.classList.add("purecounter");

        const titleElement = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = title;
        titleElement.appendChild(strong);
        titleElement.innerHTML += "" + description;

        countBox.appendChild(icon);
        countBox.appendChild(counter);
        countBox.appendChild(titleElement);
        six_col.appendChild(countBox);
        six_container.appendChild(six_col);
      }

      // ----------------------------------------------------------------------------

      const seven_container = document.querySelector(".swiper-wrapper");
      const { seven_h3, seven_h4, seven_p, seven_imgUrl } = item;
      // 遍历数据数组并生成HTML元素
      for (let i = 0; i < seven_h3.length; i++) {
        const testimonialItem = document.createElement("div");
        testimonialItem.classList.add("swiper-slide");

        const testimonialImg = document.createElement("img");
        testimonialImg.src = seven_imgUrl[i];
        testimonialImg.classList.add("testimonial-img");
        testimonialImg.alt = "";

        const testimonialH3 = document.createElement("h3");
        testimonialH3.textContent = seven_h3[i];

        const testimonialH4 = document.createElement("h4");
        testimonialH4.textContent = seven_h4[i];

        const testimonialP = document.createElement("p");
        testimonialP.textContent = seven_p[i];

        const testimonialContent = document.createElement("div");
        testimonialContent.classList.add("testimonial-item");
        testimonialContent.appendChild(testimonialImg);
        testimonialContent.appendChild(testimonialH3);
        testimonialContent.appendChild(testimonialH4);
        testimonialContent.appendChild(testimonialP);

        testimonialItem.appendChild(testimonialContent);

        seven_container.appendChild(testimonialItem);
      }

      // --------------------------------------------------------------------------------------------
      $("#team_h2").text(item.Team_h2);
      $("#team_p").text(item.Team_p);

      const team_container = document.querySelector(".team_Section");
      const { Team_name, Team_positions, Team_imgUrl } = item;

      const delays = [100, 200, 300, 400];

      Team_name.forEach((name, indexs) => {
        const memberItem = document.createElement("div");
        memberItem.classList.add(
          "col-lg-3",
          "col-md-6",
          "d-flex",
          "align-items-stretch"
        );

        const member = document.createElement("div");
        member.classList.add("member");
        member.setAttribute("data-aos", "fade-up");
        member.setAttribute("data-aos-delay", delays[indexs]);

        const memberImg = document.createElement("div");
        memberImg.classList.add("member-img");

        const img = document.createElement("img");
        img.src = Team_imgUrl[indexs];
        img.classList.add("img-fluid");
        img.alt = "";

        const memberInfo = document.createElement("div");
        memberInfo.classList.add("member-info");

        const h4 = document.createElement("h4");
        h4.textContent = name;

        const span = document.createElement("span");

        span.textContent = Team_positions[indexs];

        memberInfo.appendChild(h4);
        memberInfo.appendChild(span);

        memberImg.appendChild(img);

        member.appendChild(memberImg);
        member.appendChild(memberInfo);

        memberItem.appendChild(member);

        team_container.appendChild(memberItem);
      });

      // ---------/----------------------------------------------------------------

      const infoContainer = document.querySelector(".info");

      const { contact_us_icon, contact_us_title, contact_us_content } = item;
      for (let i = 0; i < contact_us_icon.length; i++) {
        const infoItem = document.createElement("div");
        infoItem.classList.add("info-item");

        const infoIcon = document.createElement("i");
        infoIcon.classList.add("bi", contact_us_icon[i]);

        const infoTitle = document.createElement("h4");
        infoTitle.textContent = contact_us_title[i];

        const infoContent = document.createElement("p");
        infoContent.textContent = contact_us_content[i];

        infoItem.appendChild(infoIcon);
        infoItem.appendChild(infoTitle);
        infoItem.appendChild(infoContent);

        infoContainer.appendChild(infoItem);

        $("#Company_name").text(item.footer_info_h3);
        $("#Company_address").text(item.footer_info_p);
        $("#contact_phone").text(item.footer_info_phone);
        $("#contact_phone_num").text(item.phone_num);
        $("#contact_phone").text(item.footer_info_email);
        $("#contact_email_num").text(item.email_num);
      }
    } else {
      // 继续等待
      setTimeout(aaa, 100); // 每 100 毫秒检查一次
    }
  }
  aaa();
})(jQuery);
