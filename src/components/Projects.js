import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1>Projects</h1>
        <p>Check My Projects</p>
      </div>
      <div className="projects">
        <div className="project">
          <img
            src="https://lh3.googleusercontent.com/9HFerEXJ99bBXDMb74qIIIHNrRb7BU_EGX6x5melsuEWj15LQy0j4NsDru4MHoEWci8BGM80MAZ8iGtAfED2aJQ01i_u9eaK2slyzF0JTx3mHaEhk44v0HGB3iGOrEDdUT2dpdLSSM8__CvCJ3gUVDfQWJPd0PZ9CXwuoOh2igf_u90cU6-gT1rkKwlD76qbfSKbVqZU-dNiJ5kFmajM_qMMg5HS6gA3qIL-1vpt9dEW1XflKZejg053FFzI058gL9QusNCAaPPL3x9V6JKQloM0LZSi_4mJLUfJK1hV4Ra35vI4MeF0BOR58ShSEKIkF7X-SZO2dqI8GoNvndcu_XikWD-0C_JL6OIQ_fpw4m3Pld-hBiShqLUY3IVqzezO42WNEPF2KjqaxTOhlJtSRjAa7nbp12takSei1GQ-DLVa1nch6iCvJjQemtUo9qUd3-OJRlrIlSrRXe1eac9U4EOYInB03RZIio51Pm_-pq7MzAUksWXAoA-ApBXPi_54PgIdTWn8zC6cp5X4UEIz6HVzfLrcXB1jwaUQWIMUYa24Bk9m4vJi7YzOOn_f4_E0YdzfOFa3Dj5N8GgBOZMfwEGagendZGdEFRgME6eQaC_sU2yIKgCkS-8_zA_kU4xJC2ALsGggsOoOC85unIRJriK2K7w8oaWS-KTo-QBKXU-PlxoL08xQ55Gb2SvSaqvHspNHxRoM-omdWrJWUbe5N_Z8ajdko2dNSMsYuIMZuyCwXADrVzo4BMg-UPOl1iqo0L85TeRC2RrftFlaszxH0FH0EMHy-LEcM8D0b9m2H0nEKaFE6dvJ4H6sw-RSp6hQ6-fgtGYGnoBpNcZmHaEpTwIbCn7NJL-AxJPONoE61a7-9-Po3WVXqaDTbeBfIa208HhyMJp-3qx_3jS1Bio02lfJVAcRwQbCV9EMBN4y=w1897-h935-no?authuser=0"
            alt=""
          />
          <div className="project-title">
            <h1>GitHub Clone</h1>
            <p>
              GitHub Clone with user data base. Used technologies: React. But
              hoisting is not available :(
            </p>
            <div className="project-buttons">
              <a
                target="_blank"
                href="https://github.com/sheralitukhtayev/github"
              >
                <button className="source">
                  Source
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              </a>
              <a href="">
                <button className="demo">
                  Demo
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://lh3.googleusercontent.com/47ncl9UUFY9ywN-NJGtRvxtXuhKfAsOD6ZZqABMskQE3cvV8iWUmCOTfbaVcPdZ_anvstfY7p9a6gwn2eJejNR4c3tYjEVgrhMhMyOqI7v2DHCsrKqoRmo44xuEMeHR2oFZLvokEkqvkkYVxVII3nLxiu1vu1BYH0NfRjBpX9EJtEdwaU1ENNiFHVKLHHIrJVBYRrXDYG1uhzA_P03DlrZI5SjxW5aEiwoxlA25p7jXYN8IQ4Ws7uR6XniY8L6XgTObMcuI77qoJErpvetGBls0QlcJUyeL82guN2qVYbDR-gWM6wuiY2fA-_N1Ayxs1QfWZzPpbBJFlctpNACE-dNqLl86704bf7K0UeB1-6wPmDcOdxsHLUpq0xQeo4pt8eQY3YZZLyuRsTG6Qu5EghL33h1mCLyNXrxP7LGSIYhU3SVF7bEUw0TbVg6OX9z1Ep_jXWmg8mt4OyjoTuiCAQWif5xM4z3o92wF0w3bcMNItZrTQdaO0xoipN9k7oV7OELuO8ZGcxm7O1nT3wg9jnWnA6m7rKRzF5_GjMbVxvGt0Fr_Y1zVVsv3zleUZxiFDFwb_Lyyl_DsTELTntFy6No-6o7FpdQ44N5hDFmkptLSkbJriUSqGhTgIln_ebMjibOiilZrcAGqffz_jJcUGDnjX7uOLztgqAqsCuGSziY1tR9r9zC1JxTr_kZCH2rRjsu6lHXlyWnxwl4qs_ner_ja90WqOmJr_7hq1ESjs93zIZUFyHLnpB_Ldr0mDdIbQJ3C7YbBhy9eMvKsIAVzTKtDZmIVYa5CwSKzawfRrocch0uVmKJEE4ay0PCsZuDEIXdnu70UEHyMF9rFPKIQJYBwFDvGGELt5fKCdNE2OsCYVZldIoen6PCaZ3L8fwNJDX9EnLccXzk3V40XhIM815ps0Bh7U0MbTnqUCIaYz=w1901-h865-no?authuser=0"
            alt=""
          />
          <div className="project-title">
            <h1>Lift Universal Clone</h1>
            <p>
              Lift Universal Clone is clone of{" "}
              <a href="https://lift-universal.uz">Lift Universal</a>. Used
              technologies: React.
            </p>
            <div className="project-buttons">
              <a
                target="_blank"
                href="https://github.com/sheralitukhtayev/lift-universal"
              >
                <button className="source">
                  Source
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              </a>
              <a target="_blank" href="https://1611liftuniversal.netlify.app">
                <button className="demo">
                  Demo
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://lh3.googleusercontent.com/KqILKUYXLIICu1_17t2zCBzfbHKaZ-v4pVX9Vq5fBVMpB31vY8fOVbTgPBUYn_7ya-OR5RTROgIqRSvJRz_K3E8m8h09kCD5bEBo8ntagU3B_Oa3f5YuaFvrgE-Dhtk0L4-fu2nMLN8oj0MSIh8VbwHcsyh5nQzEmDsaPkK9e6wnIPEbsATnQFJAJPtf7eBW4II4P9zle1osBhODOBmsSqxFK0c5WtCWLyUocoJ4dcqryVzAOwTrkgHrDqXbDvJEs-1Mr2P5kWWqKa9YikGFaGVyyqiNRFWi71EKjvayuNvG9BwYAejxOjiMaTOOpdgDJc50Ur2GesA4AgN7I0050epE-r7kC04tBH3_FdQAk5ZD4XXXdQn3gNaJCd6adYwkZpgqF9sI6JiZV3KjgRLeDnP6HDmI72b7QWXMYUl3f1UshWlKkpL25TdEGw3mIe6jgWnAzYm60b5jZ7kPbS5CHGq1x2bGCmrWYCQhpnjQSRWxxj_hCHtzDmBpAdXxTbTFDS1HaFBkJpVE1GG00ubUQBDYU0TjI2cxihmm09pm2PJUNytP-G8O2Og0u6IC-TZNTMv6dSnkRtugu5YlCf4cSBofsxJFTSOn7L3wxL_gwuU41q3OHSSgXMZ5_dUcJ0eX2uY6IfT1xbMym6z26C9WctBsZd00KIOhbscWAfbPVRXFFecrBKxzI260t3pp7tmlQNSvv9f8Wb68PmtvMD4hJhCQLGyjwYHUlwlcITWN4jRyVPKqE6_XKxfC9AEESycKYBTX5pdR3fIRcAJCWHFwq3Cs5I-HuvboYBNpzpCnTcjp6hihAydSKMKGeJp74Al6uxh87-LFR7dzX7gUulyGiOOBYiwJygQM3zfqgm6pdP3Q2Kt10hIhdRWzIsqAWc0ahLv1MD0bGuGDSlPfgH9hfn5GuJBSdaHWRs84UFzr=w1903-h937-no?authuser=0"
            alt=""
          />
          <div className="project-title">
            <h1>City Lift Clone</h1>
            <p>
              City Lift Clone is clone of{" "}
              <a href="https://citylift.ru">City Lift</a>. Used technologies:
              React.
            </p>
            <div className="project-buttons">
              <a
                target="_blank"
                href="https://github.com/sheralitukhtayev/list-clone"
              >
                <button className="source">
                  Source
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              </a>
              <a target="_blank" href="https://1611lift.netlify.app">
                <button className="demo">
                  Demo
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://lh3.googleusercontent.com/D3tYyZNV-clp8PjYooV3SUm8zUOyhOumXa18edQcc1u34wulweKVtGI_-MYx76jMqHfIwg5jm9dFj6wJZEZnYpqWLHvzqDvdFKoEbIK9MfzeaTyZKpZztXX_F7umaBHBRMcyzsCVoHiAKsx_w7jGzDp4kpsicu-YrA0owCVUx7dhshKQeUUBgwHtDftW2-gdVwwuFjqPk3MRghZDViEVdivBQYuZzg3HVsvU72MCIQGsV__QgGuyvOQI3AZ5wpSJRSMArQfM0wzhWGEf0xK1pHW0vtJQRDYBHEa_E0ZOzlaCltOF0R13I6CEp8-6jDflBwRNrUt6ciIxtl7_6lOYwYaNHMbQ-xBqo_GPzn43ByFliBjhB8HeozdkzWVpmT3uFuYGS4y61kSpjgrSjEhN1npgClNar-KSqb6h1sO8GvPJ2MTD8JfpFSnLhLraj46cVc_cVxkbKRGEXI0U_hkVV9lHOlbsLjyuPB6PT1OtI0_cligcAbeSBz_MyGQb6j8CCBrfhs52GA-pXgiP_nh4fwAEX6Lo2rtjr0jzUVzxCpnvUvb_6Zskd6UOQ3ohegN28m4srXnoc-SMyYbN_-oAvMDnkNOcVePkG7VojFfXkmc_gkvls8EZs9EFQX6_S6fYyvcyPB6vqFWYD0E09fTdnHiPIgeFFKlTefkDVSnaaFuSNkddp-fvjxcCVCW1tHhnvtJi-WsK8_094lPf5tUOwmxOQP4ClgCqsTehTJ7f3QyVDm54StULAXeqfW0moVAude2A8VSIKprbFQ4KTKuITn2IbFl479nbPAs6DQgSjjvk54NPct2Unr0O7oj_uSKpPeP3QATqDX1jf_EUZry269V37j3Ed_WzmfyZVwp4QKUYBVRp8raazl3MVOqfoHLeN90w9EtPWLqDY-EmoDKvtckjTCMjq2V5JUyI5HVE=w1894-h940-no?authuser=0"
            alt=""
          />
          <div className="project-title">
            <h1>Netflix Clone</h1>
            <p>Netflix Clone with TMDB Api. Used technologies: React.</p>
            <div className="project-buttons">
              <a
                target="_blank"
                href="https://github.com/sheralitukhtayev/netflix-clone"
              >
                <button className="source">
                  Source
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              </a>
              <a target="_blank" href="https://1611netflix.netlify.app">
                <button className="demo">
                  Demo
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://lh3.googleusercontent.com/04wkuUeAX_RQkOiwbraj0X1v8rHGQrCQmxSmbE9OarYtPHPasTE2STPtG6Ejl05W5qQtfKUUxKtXyEPvlQ5CrAEpkRhvB7Khnc88tOSIjzCan4zrkNNGsKyokARUCE8FeTIe9zGLAdX3ixJ9v373cTjSrkQU0QsWfsTmiBjEJCkHrXxfTJjhpFKugoYE-3BuAhi9cFEIr-fF65Rw-_QuZTVC9WNAuPOJHzdRxY_EIKgyhEkmFXV1ZMfQPCkqGyMN-8ccVMVitPlpr4-q6ggwbhqI-iMj9DydTv-klCMP50YV_-73mM5isrgxlh_qh8FTHWh0PXAjJYxjggvkIORvGKuYrv5GPfyzIypq3agfwo2SCkHoI0qiUurLgpTpU_Et8kYn9991OtWG_Rxd2BE3NpkAUONvv-tQ7ZwWOiQ3kVAimaov1lShPhOh8gIQPuxj09ckxiAS0QjaL6qbJEE-We8QHBATUItnk0nVJ4VZz1vgo2l9Nxa2mDOyoUNGyu0L5ocZHV0B5mFxIqs4yxY9qM-Al1etZTaFlNjZ7GNHJkDeZLPg9c4aOn4chOLaOcXsObwRyT34lWEw2cr87QjvTp1NoEnDActgs8o9C9eNrLD4CMXalN3k1X0XJFdbXS2e2BaE0kDZgzD9KMbapICZMJ6c1h5OaqRWAeLylz4JnlwKhOcZ5obT5EiFg1Z4PbruAuAiyvJT8wC2JCBBKDMszxnX3WIE7QqmvyiZlfGop50VU_IhQ4MhwhW_RgO4c44PWtFxsfluVFfp25faGQ0WFP2ceW7GlfRCSMUCVJSVam-QWEVY4dhqkQSRfs_OvBfxJWEsYqAcvMbneKkB2SfWKFeENdpXonzzwkNrBi9cDdbiG3KUnfXAhsKkOmy0HwBl34NqAgVsCtag5rx1P6jCUJe805oVIs_XBJVG9NYY=w1433-h937-no?authuser=0"
            alt=""
          />
          <div className="project-title">
            <h1>Akademnashr</h1>
            <p>
              Akademnashr with during
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=h2ucBIYlS1Q&list=PLAKCCNBxrHkTn-jqmrDzdbGapIbl-Qpfe"
              >
                {" "}
                MuhammadJavohir Suratov's Jivoy Course
              </a>
              . Used technologies: HTML & CSS.
            </p>
            <div className="project-buttons">
              <a
                target="_blank"
                href="https://github.com/sheralitukhtayev/akademnashr"
              >
                <button className="source">
                  Source
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              </a>
              <a target="_blank" href="https://1611akademnashr.netlify.app">
                <button className="demo">
                  Demo
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
