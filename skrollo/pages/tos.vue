<template>
  <div class="container px-0 pb-4">
    <div class="my-4">
      <b-button @click="$router.back()" :variant="btnColor">
        Go Back
      </b-button>
    </div>

    <div>
      <b-card
        :class="cardClass"
        no-body
      >
        <b-tabs
          card
          :active-nav-item-class="activeTabClass"
          :active-tab-class="activeTabClass"
        >
          <b-tab
            :title-link-class="titleLinkClass"
            title="Terms and Conditions"
            active
          >
            <b-card-text :class="contentTextClass">
              <h1>Terms and Conditions</h1>
              
              <h2>Welcome to Skrollo!</h2>
              <p>These are the terms and conditions for: </p>
              <p><nuxt-link to="/">https://skrollo.com/</nuxt-link></p>
              <p>By accessing the Skrollo website, (hereby "Our Website”), you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy. If you do not accept all of these Terms, then you may not use Our platform. In these Terms, "we", "us", "our" and " Skrollo" refers to Skrollo and "you" and "your" refers to you, the user of Our Website and platform.</p>
              <p>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE ACCESSING, USING OR OBTAINING ANY MATERIALS, INFORMATION OR SERVICES.</p>
              
              <h2>ACCEPTANCE OF TERMS</h2>
              <p>This Agreement sets forth legally binding terms for your use of Skrollo. By using Skrollo, you agree to be bound by this Agreement, whether you are a “Visitor” (which means that you simply browse Skrollo website) or you are a “User” (which means that you have registered on Skrollo as a user). If you do not accept the terms of this Agreement, you should leave Skrollo websites and discontinue use of the platform immediately. We may modify this Agreement from time to time, and such modification shall be effective upon its posting on Skrollo. You agree to be bound by any modification to this Agreement when you use Skrollo after any such modification is posted; it is therefore important that you review this Agreement regularly.</p>
              <p>You represent and warrant that all registration information you submit is accurate and truthful; and that your use of the platform does not violate any applicable law or regulation. Skrollo may, in its sole discretion, refuse to offer the platform to any entity and change its eligibility criteria at any time. This provision is void where prohibited by law and the right to access the Service and the platform is revoked in such jurisdictions.</p>
              
              <h2>ELIGIBLITY</h2>
              <p>You may use the platform only if you can form a binding contract with Skrollo, and only in compliance with these terms and all applicable local, state, national, and international laws, rules, and regulations.</p>
              <p>The use of this website and platform for children under 13 years is prohibited and older children should be supervised and given appropriate guidance in their use of our platform. It is the responsibility of parents and legal guardians to determine whether any of the content and/or services are appropriate for their child.</p>
              <p>The platform may not be available to any Users previously removed by Skrollo. By using the platform and services, you represent and warrant that you have the full right, power and authority to enter into this Agreement and to fully perform all of your obligations hereunder. You further represent and warrant that you are under no legal disability or contractual restriction that prevents you from entering into this Agreement.</p>
              
              <h2>LICENSE TO USE THE PLATFORM</h2>
              <p>Skrollo gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you by Skrollo as part of the services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the services as provided by Skrollo, in the manner permitted by these terms. You may not copy, modify, distribute, sell, or lease any part of our content or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.</p>
              <p>The User agrees not to use the platform and the Services negligently, for fraudulent purposes or in an unlawful manner. Likewise, the User agrees not to partake in any conduct or action that could damage the image, interests or rights of the Skrollo website or third parties.</p>
              
              <h2>ACCOUNT AND SECURITY</h2>
              <p>If you register on Skrollo website, you will be required to choose a password and username, and you may be asked for additional information regarding your account, such as your e-mail address and name. You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify Skrollo of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you log out from your account at the end of each session. You may never use another User’s account without prior authorization from Skrollo. Skrollo will not be liable for any loss or damage arising from your failure to comply with this Agreement.</p>
              
              <h2>ACCOUNT DELETION AND TERMINATION</h2>
              <p>The users may terminate their Accounts any time, for any reason, by following the instructions on Skrollo. That termination will only result in the deletion of the Account and the deletion of all the personal data granted to Skrollo.</p>
              <p>Skrollo reserves the right to terminate your Account or your access immediately, with or without notice to you, and without liability to you, if Skrollo believes that you have breached any of these terms, furnished Skrollo with false or misleading information, or interfered with use of the platform, website or the service by others.</p>
              
              <h2>THIRD-PARTY MATERIALS.</h2>
              <p>“Third-Party Materials” means any content, images, videos, texts or other material that is owned by a third party, such as stock images, videos and texts. Such Third-Party Materials are subject to the applicable third-party terms and licenses, and may only be used as permitted by such terms and licenses.</p>
              
              <h2>RESALE OF SERVICES</h2>
              <p>Users may not resell any portion of the content or the functionality of the platform, to any other party without prior written permission from Skrollo, which may be granted or withheld in Skrollo sole discretion.</p>
              
              <h2>COPYRIGHTS</h2>
              <p>All content included on this website, such as text, graphics, logos, button icons, images, video, audio clips, data compilation, and software, is presented by Skrollo, its merchants, or its users (users content) and protected by USA and international copyright laws.   All software used on this site is the property of Skrollo or its software suppliers and protected by USA and international copyright laws.</p>
              <p>You may print a copy of our site's content strictly for personal use only. By doing so, you also consent not to directly or indirectly change or remove any copyright, trade name, service mark, trademark, or any other proprietaries shown on any of our content. Any alterations or use of content outside the guidelines of this Terms and Conditions violates intellectual property rights. By accessing our website, you do not own any rights or titles to our content or other intellectual properties.</p>
              
              <h2>COPYRIGHTS COMPLAINTS</h2>
              <p>Skrollo respects the intellectual property of others, and expects users to do the same. If you believe, in good faith, that any materials provided on or in connection with the Skrollo website infringe upon your copyright or other intellectual property right, please send the following information to: </p>
              <ol type="i">
                <li>Identification of the intellectual property right that is allegedly infringed. All relevant registration numbers, or a statement concerning the ownership of the work, should be included.</li>
                <li>A statement specifically identifying the location of the infringing material, with enough detail that Skrollo may find it on the Skrollo Site.  Please note: it is not sufficient to merely provide a top-level URL.</li>
                <li>Your name, address, telephone number and e-mail address.</li>
                <li>A statement by you that you have a good faith belief that the use of the allegedly infringing material is not authorized by the owner of the rights, or its agents, or by law.</li>
                <li>A statement by you, made under penalty of perjury, that the information in your notice is accurate, and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                <li>An electronic or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the copyright interest.</li>
              </ol>
              
              <h2>USER CONTENT</h2>
              <p>Certain features of the website may permit users to upload content, including social media posts and other content which may be comprised of images, videos, text, comments and other types of works (“User Content”) and to publish User Content on the website. You retain any Copyright that you may hold in the User Content that you post to the website. Nevertheless, we need certain permission from you in order to publish the content.</p>
              
              <h2>LICENSE GRANT TO SKROLLO FOR USER CONTENT</h2>
              <p>By providing User Content to or via the Service, you grant Skrollo a worldwide, non-exclusive, royalty-free, fully paid right and license (with the right to sublicense) to host, store, transfer, display, perform, reproduce, modify for the purpose of formatting for display, and distribute your User Content, in whole or in part, in any media formats and through any media channels now known or hereafter developed.</p>
              
              <h2>USER CONTENT REPRESENTATIONS AND WARRANTIES</h2>
              <p>Skrollo disclaims any and all liability in connection with User Content. You are solely responsible for your User Content and the consequences of providing User Content via the Service. By providing User Content via the Service, you affirm, represent, and warrant that:</p>
              <ol type="a">
                <li> You are the creator and owner of the User Content, or have the necessary licenses, rights, consents, and permissions to authorize Skrollo and users of the Service to use and distribute your User Content as necessary to exercise the licenses granted by you in this Section, in the manner contemplated by  Skrollo, the Service, and these Terms.</li>
                <li>Your User Content, and the use of your User Content as contemplated by these Terms, does not and will not: (i) infringe, violate, or misappropriate any third party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right; (ii) slander, defame, libel, or invade the right of privacy, publicity or other property rights of any other person; or (iii) cause  Skrollo to violate any law or regulation.</li>
                <li>Your User Content could not be deemed by a reasonable person to be objectionable, profane, indecent, pornographic, harassing, threatening, embarrassing, hateful, or otherwise inappropriate.</li>
                <li>Your User Content does not and will not contain Hateful Content, a Threat of Physical Harm, or Harassment.</li>
              </ol>
              
              <h2>USER CONTENT DISCLAIMER</h2>
              <p>We are under no obligation to edit or control User Content that you or other users post or publish, and will not be in any way responsible or liable for User Content. Skrollo may, however, at any time and without prior notice, screen, remove, edit, or block any User Content that in our sole judgment violates these Terms or is otherwise objectionable. You understand that when using the Service, you will be exposed to User Content from a variety of sources and acknowledge that User Content may be inaccurate, offensive, indecent, or objectionable. You agree to waive, and do waive, any legal or equitable right or remedy you have or may have against Skrollo with respect to User Content. If notified by a user or content owner that User Content allegedly does not conform to these Terms, we may investigate the allegation and determine in our sole discretion whether to remove the User Content, which we reserve the right to do at any time and without notice. For clarity, Skrollo does not permit copyright-infringing activities on the Service.</p>
              
              <h2>CONTENT REVIEW</h2>
              <p>Skrollo does not control and does not have any obligation to monitor: (a) User Content; (ii) any content made available by third parties; or (iii) the use of the Service by its users. You acknowledge and agree that Skrollo reserves the right to, and may from time to time, monitor any and all information transmitted or received through the Service for operational and other purposes. If at any time Skrollo chooses to monitor the content, Skrollo still assumes no responsibility or liability for content or any loss or damage incurred as a result of the use of content. During monitoring, information may be examined, recorded, copied, and used in accordance with our Privacy Policy.</p>
              
              <h2>ACCURACY AND TIMELINESS OF INFORMATION</h2>
              <p>We do not guarantee that the information available on the website is accurate, complete or updated. The content of this website is provided for general information and should not be taken as a professional advice, please consult other more reliable and accurate sources. Any use of the material provided on this website is at your own risk.</p>
              
              <h2>PROHIBITED ACTIVITIES</h2>
              <p>For all content other than your content, you agree not to otherwise modify, transfer, or sell or re-sell any information, software or services obtained from or through the website. Additionally, you agree not to:</p>
              <ol type="i">
                <li>Use the services or content for any commercial purpose, outside the scope of those commercial purposes explicitly permitted under this agreement and related guidelines as made available by Skrollo;</li>
                <li>Access, monitor, reproduce, distribute, transmit, broadcast, display, sell, license, copy or otherwise exploit any Content of the Services, including but not limited to, using any robot, spider, scraper or other automated means or any manual process for any purpose not in accordance with this Agreement or without our express written permission;</li>
                <li>Violate the restrictions in any robot exclusion headers on the Services or bypass or circumvent other measures employed to prevent or limit access to the platform;</li>
                <li>Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure;</li>
                <li>Deep-link to any portion of the platform for any purpose without our express written permission;</li>
                <li>"Frame", "mirror" or otherwise incorporate any part of the services into any other websites or service without our prior written authorization;</li>
                <li>Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by Skrollo;</li>
                <li>Circumvent, disable or otherwise interfere with security-related features of the Services or features that prevent or restrict use or copying of any Content; or</li>
                <li>Download any Content unless it’s expressly made available for download by Skrollo.</li>
              </ol>
              
              <h2>DISCLAIMER OF WARRANTIES</h2>
              <p>Skrollo will provide the platform with reasonable skill and care but does not give any guarantees, warranties or representations in respect of any other person's services.</p>
              <p>Because of the nature of the Internet Skrollo provides and maintains The Website on an "as is", "as available" basis and makes no promise that use of The Website will be uninterrupted or entirely error free. We are not responsible to you if we are unable to provide our Internet services for any reason beyond our control.</p>
              <p>Our Website may from time to time contain links to other web sites which are not under the control of and are not maintained by us. These links are provided for your convenience only and we are not responsible for the content of those sites.</p>
              <p>Except as provided above we can give no other warranties, conditions or other terms, express or implied, statutory or otherwise and all such terms are hereby excluded to the maximum extent permitted by law.</p>
              <p>You will be responsible for any breach of these terms by you and if you use The Website in breach of these terms you will be liable to and will reimburse Skrollo for any loss or damage caused as a result.</p>
              <p>Skrollo will not be liable in any amount for failure to perform any obligation under this agreement if such failure is caused by the occurrence of any unforeseen event beyond its reasonable control including without limitation Internet outages, communications outages, fire, flood, war or act of God.</p>
              <p>These terms do not affect your statutory rights as a consumer which are available to you.</p>
              <p>Subject as aforesaid, to the maximum extent permitted by law, Skrollo excludes liability for any loss or damage of any kind howsoever arising, including without limitation any direct, indirect or consequential loss whether or not such arises out of any problem you notify to  Skrollo and  Skrollo shall have no liability to pay any money by way of compensation, including without limitation all liability in relation to:</p>
              <ul>
                <li>Any incorrect or inaccurate information on Skrollo;</li>
                <li>Any interruptions to or delays in updating Skrollo;</li>
                <li>The infringement by any person of any Intellectual Property Rights of any third party caused by their use of The Website or any product or service purchased through the website;</li>
                <li>Any loss or damage resulting from your use or the inability to use the web site or resulting from unauthorized access to, or alteration of your transmissions or data in circumstances which are beyond our control;</li>
                <li>Any loss of profit, wasted expenditure, corruption or destruction of data or any other loss which does not directly result from something we have done wrong;</li>
                <li>Any amount or kind of loss or damage due to viruses or other malicious software that may infect a user's computer equipment, software, data or other property caused by persons accessing or using content from The Website, or from transmissions via emails or attachments received from Skrollo.</li>
                <li>All representations, warranties, conditions and other terms which but for this notice would have effect.</li>
              </ul>
              
              <h2>SKROLLO AND THIRD PARTIES</h2>
              <p>Skrollo contains Content of third-party licensors to Skrollo, which is protected by copyright, trademark, patent, trade secret and other laws. Skrollo hereby grants to you a limited, revocable, non-sublicensable license to Stream and/or view the Content and any third party Content located on or available through Skrollo or Service (excluding any software code therein as set forth above) solely for your personal, non-commercial use in connection with viewing Skrollo and using the Service.</p>
              <p>Any dealings with third parties included within or on Skrollo involving the delivery of and payment for goods and services, or any other terms, conditions, warranties, or representations associated with such third parties, are solely between you and that third party. Skrollo is neither responsible nor liable for any part of such dealings or promotions. Any reference to any third party or the products or services of any third party on Skrollo does not constitute an endorsement or recommendation of such third party or the product or services of such third party by Skrollo or any of its employees, officers, independent contractors, agents or other representatives. Any reference to any third party on Skrollo is provided to you for informational purposes only. Skrollo encourages you to conduct your own research and due diligence regarding such third parties and their products and services. While Skrollo works to ensure the information on Skrollo is current and accurate.</p>
              
              <h2>NON-COMMERCIAL USE</h2>
              <p>The use of the platform may not be used in connection with any commercial purposes, except as specifically approved by Skrollo. Unauthorized framing of or linking to any of Skrollo is prohibited. Commercial advertisements, affiliate links, and other forms of content without notice and may result in termination of usership privileges.</p>

              <h2>SECURITY COMPONENTS</h2>
              <p>You understand that Skrollo and software embodied within Skrollo may include security components that permit digital materials to be protected, and that use of these materials is subject to usage rules set by Skrollo and/or content providers who provide content to Skrollo platform. You may not attempt to override, disable, circumvent or otherwise interfere with any such security components and usage rules embedded into Skrollo.</p>

              <h2>ELECTRONIC COMMUNICATIONS</h2>
              <p>No responsibility will be accepted by Skrollo for failed, partial or garbled computer transmissions, for any computer, telephone, cable, network, electronic or internet hardware or software malfunctions, failures, connections, availability, for the acts or omissions of any service provider, internet accessibility or availability or for traffic congestion or unauthorized human act, including any errors or mistakes.</p>

              <h2>INDEMNIFICATION</h2>
              <p>You agree to defend and indemnify Skrollo from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including but not limited to reasonable legal and accounting fees, brought by third parties as a result of:</p>
              <ul>
                <li>Your breach of this Agreement or the documents referenced herein.</li>
                <li>Your violation of any law or the rights of a third party.</li>
                <li>Your use of the Skrollo website.</li>
              </ul>

              <h2>CHANGES AND TERMINATION</h2>
              <p>We may change the website and these terms at any time, in our sole discretion and without notice to you. You are responsible for remaining knowledgeable about these terms. Your continued use of the site constitutes your acceptance of any changes to these Terms and any changes will supersede all previous versions of the terms. Unless otherwise specified herein, all changes to these Terms apply to all users take effect. Furthermore, we may terminate this agreement with you under these Terms at any time by notifying you in writing (including by email) or without any warning.</p>

              <h2>PERSONAL DATA</h2>
              <p>Any personal information you post on or otherwise submit in connection with the Services and the use of the platform, will be used in accordance with our Privacy Policy. Please refer to our Privacy Policy.</p>
              <p>Our Privacy Policy is written according to the CalOPPA (California Online Privacy Protection Act) and the GDPR (General Data Protection Regulation - European regulation).</p>

              <h2>ASSIGNMENT</h2>
              <p>This Agreement and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Skrollo without restriction.</p>

              <h2>INTEGRATION CLAUSE</h2>
              <p>This Agreement together with the Privacy Policy and any other legal notices published by Skrollo, shall constitute the entire agreement between you and Skrollo concerning and governs your use of the platform and website.</p>

              <h2>DISPUTES</h2>
              <p>You agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Skrollo website, will be settled by binding arbitration between you and  Skrollo, except that each party retains the right to bring an individual action in small claims court and the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets, patents or other intellectual property rights. You acknowledge and agree that you and Skrollo are each waiving the right to a trial by jury or to participate as a plaintiff or class in any purported class action or representative proceeding. Further, unless both you and Skrollo otherwise agree in writing, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of any class or representative proceeding.</p>

              <h2>HEADINGS</h2>
              <p>Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These terms set forth the entire understanding and agreement between us with respect to the subject matter therein.</p>

              <h2>FINAL PROVISIONS</h2>
              <p>These Terms are governed by the law of The United States. Use of our website is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this paragraph.</p>
              <p>Our performance of these Terms is subject to existing laws and legal process, and nothing contained in these Terms limits our right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of our Platform or information provided to or gathered by us with respect to such use.</p>
              <p>If any part of these Terms is found to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions will not in any way be affected or impaired. Our failure or delay in enforcing any provision of these Terms at any time does not waive our right to enforce the same or any other provision(s) hereof in the future.</p>
              <p>Any rights not expressly granted herein are reserved.</p>
            </b-card-text>
          </b-tab>
          <b-tab :title-link-class="titleLinkClass" title="Privacy Policy">
            <b-card-text :class="contentTextClass">
              <h1>PRIVACY POLICY</h1>

              <h2>Welcome to Skrollo!</h2>

              <p><b>Skrollo</b> values your privacy. This notice describes what information we collect, how we use it, and, if necessary, those with whom we share it.</p>

              <p><b>By visiting Skrollo, you are accepting the practices described in this Privacy Policy.</b> Your use of the Website is also subject to our Terms and Conditions.</p>

              <p>Our Privacy Policy is written according to the CalOPPA (California Online Privacy Protection Act) and the GDPR (General Data Protection Regulation - European regulation).</p>

              <h2>GENERAL INFORMATION</h2>
              <p>The personal data of the users that are collected and processed through the website:</p>
              <p><nuxt-link to="/">https://www.skrollo.com</nuxt-link></p>
              <p>Will be under responsibility and in charge of: ScrollTron, Inc.</p>
              <p>Team@Skrollo.com</p>

              <p>(Hereinafter referred to as <b>&ldquo;Skrollo &ldquo;</b>).</p>

              <h2>TYPES OF INFORMATION GATHERED</h2>
              <p>The information we learn from customers helps personalize and continually improve your experience at Skrollo. Here are the types of information we gather:</p>
              <p>Information You Give Us. You provide information when you search, read and watch the content, buy the product or communicate with us (contact form). As a result of those actions, you might supply us with the following information:</p>
              <p> 
              <ul>
                <li>Username</li>
                <li>Email address</li>
                <li>IP address</li>
                <li>Any additional information relating to you that you provide to us directly through our websites or indirectly through our websites or online presence such as &lsquo;cookies&rsquo;.</li>
              </ul> 
              <p>Skrollo will not collect any personally identifiable information about you, unless you provide it.</p>
              <p><b>GOOGLE Analytics.</b> We use Google Analytics provided by Google, Inc., USA (&ldquo;Google&rdquo;). These tool and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage and purchase history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the website and improve our service.</p>
              <p><b>Automatic Information.</b> Like many websites, we use &quot;cookies.&quot; We obtain certain types of anonymous information which is not personally identifiable when your web browser accesses, Skrollo or third-party content served by or on behalf of Skrollo on other websites. Some of the information we collect and analyze includes the Internet protocol (IP) address; computer and connection information such as browser type, version, and connection speed; and the content (user content) you searched for, viewed, and shared.</p>

              <h2>HOW LONG WE KEEP YOUR DATA</h2>
              <p>The personal information will be kept for as long as you keep your account active or as long as you don&rsquo;t withdraw your consent. At the moment the user account is closed, whether by user or Skrollo's decision, the user's personal data will be deleted immediately.</p>

              <h2>HOW WE USE YOUR INFORMATION.</h2>
              <p>In general, we use the information we collect primarily to provide, maintain, protect and improve our current website. We use personal information collected through our website as described below and described elsewhere in this Policy to:</p>
              <ul>
                <li>Identify you as a user in our system.  &bull; Create and manage user accounts.</li>
                <li>Upload user content.</li>
                <li>Improve our website, and how we operate our business.</li>
                <li>Understand and enhance your experience using our website.</li>
                <li>Send emails through bulk email delivery platforms.</li>
                <li>Respond to your comments or questions and for our support team to contact you.</li>
                <li>Send you related information, including confirmations, invoices, technical notices, updates, security alerts and support and administrative messages.</li>
                <li>Communicate with you about upcoming events and news about Skrollo website and our selected partners.</li>
                <li>Marketing purposes of Skrollo website (Google ADS, Facebook ADS, etc).</li>
                <li>Link or combine your information with other information we get from third parties to help understand your needs and provide you with better service.</li>
                <li>Protect, investigate and deter against fraudulent, unauthorized or illegal activity.</li>
              </ul>

              <h2>HOW DO YOU GET MY CONSENT?</h2>
              <p>By registering as a user and provide us with personal information to communicate with you, you agree that we collect and use your information. You can withdraw your consent, contact us through the contact information or the support page.</p>

              <h2>SOCIAL NETWORKS</h2>
              <p>On our website you will find links and functions linked to different social networks, in which you can share your information.</p>
              <p>It is advisable to consult the privacy policy and data protection of each social network used on our website.</p>
              <p>Facebook: https://www.facebook.com/privacy/explanation</p>
              <p>Twitter: <a href="https://twitter.com/privacy">https://twitter.com/privacy</a></p>
              <p>Instagram: <a href="http://instagram.com/about/legal/privacy/">http://instagram.com/about/legal/privacy/</a></p>
              <p>YouTube: <a href="https://www.youtube.com/yt/about/de/">https://www.youtube.com/yt/about/de/</a></p>

              <h2>HOW WE SHARE INFORMATION</h2>
              <p>Information about our customers is an important part of our business, and we are not in the business of selling it to others. We share customer information only as described below.</p>
              <p><b>Third-Party Service Providers.</b> We employ other companies and individuals to perform functions on our behalf. Examples include sending email, analyzing and tracking data, providing marketing assistance, They have access to personal information needed to perform their functions, but may not use it for other purposes.</p>
              <p><b>Business Transfers.</b> In the event that Skrollo creates, merges with, or is acquired by another entity, your information will most likely be transferred. Skrollo will email you or place a prominent notice on our Website before your information becomes subject to another privacy policy.</p>
              <p><b>Protection of Skrollo and others.</b> We release personal information when we believe release is appropriate to comply with the law, enforce or apply our Terms and conditions and other agreements, or protect the rights, property, or safety of Skrollo, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.</p>
              <p><b>With Your Consent.</b> Other than as set out above, you will receive notice when personally identifiable information about you might go to third parties, and you will have an opportunity to choose not to share the information.</p>
              <p><b>Anonymous Information.</b> Skrollo uses the anonymous browsing information collected automatically by our servers primarily to help us administer and improve the Website. We may also use aggregated anonymous information to provide information about the Website to potential business partners and other unaffiliated entities. This information is not personally identifiable.</p>
              <p><b>Email Address.</b> The email address that you supply to us for purposes of receiving our email communications will never be rented or sold to a third party.</p>

              <h2>PROTECTING YOUR INFORMATION</h2>
              <p>We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input. If transactions are processed on the Website, transaction information is transmitted to and from the Website in encrypted form using industry-standard SSL connections to help protect such information from interception. We restrict authorized access to your personal information to those persons who have a legitimate purpose to know that information to provide services to you and those persons you have authorized to have access to such information.</p>
              <p>Skrollo follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and once Skrollo receives it. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while Skrollo strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
              <p>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.</p>

              <h2>YOUR RIGHTS</h2>
              <p>You have the following rights in relation to your personal data provided to Skrollo:</p>
              <ul>
                <li>Access your personal data.</li>
                <li>Request the correction of inaccurate data.</li>
                <li>Request its deletion.</li>
                <li>Request limitation of the processing of your data.</li>
                <li>Oppose the treatment of your data.</li>
                <li>Request your portability.</li>
                <li>Not be subject to automated individual decisions.</li>
              </ul>
              <p>The Users can exercise all these rights contacting us through the contact information or the contact page and indicating the reason for his request.</p>
              <p>Without preconception to any other administrative appeal or legal action, the User shall have the right to submit a claim to a Control Authority, in particular in the State in which he or she has their habitual residence, place of work or place of the alleged infringement, If you consider that the processing of your personal data is not appropriate to the regulations, as well as in the case of not seeing the exercise of your rights satisfied. The control authority in which the claim was filed will inform the claimant about the course and result of the claim.</p>

              <h2>EU MEMBERS&rsquo; RIGHTS (GDPR COMPLIANT)</h2>
              <p>If you are habitually located in the European Union, you have the right to access, rectify, download or erase your information, as well as the right to restrict and object to certain processing of your information. While some of these rights apply generally, certain rights apply only in certain limited circumstances.</p>
              <p>We describe these rights below:</p>
              <ul>
                <li>Access and Porting: You can access of your information any time.</li>
                <li>Rectify, Restrict, Limit, Delete: You can also rectify, restrict, limit or delete much of your information by contact us.</li>
                <li>Object: Where we process your information based on our legitimate interests explained above, or in the public interest, you can object to this processing in certain circumstances. In such cases, we will cease processing your information unless we have compelling legitimate grounds to continue processing or where it is needed for legal reasons.</li>
                <li>Revoke consent: Where you have previously provided your consent, such as to permit us to process health-related data about you, you have the right to withdraw your consent to the processing of your information at any time. For example, you can withdraw your consent by updating your settings. In certain cases, we may continue to process your information after you have withdrawn consent if we have a legal basis to do so or if your withdrawal of consent was limited to certain processing activities.</li>
                <li>Complain: Should you wish to raise a concern about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local supervisory authority.</li>
              </ul>
              <p> Additionally, if you are a European resident, we note that we are processing your information in order to fulfil contracts we might have with you or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe.</p>
              <p>You can see more about these rights at:</p>
              <p><a href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_en">https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_en</a></p>

              <h2>CALIFORNIA ONLINE PRIVACY PROTECTION ACT COMPLIANCE (CalOPPA)</h2>
              <p>CalOPPA is the first state law in the U.S to require commercial websites and online services to post a privacy policy. The law&rsquo;s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from U.S consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.</p>
              <p>Because we value your privacy, we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act (CalOPPA).</p>
              <p>According to the California Online Privacy act, you have the following rights:</p>
              <ul>
                <li>Know what personal data is being collected.</li>
                <li>Know whether your personal data is sold or disclosed and to whom.</li>
                <li>Access to your personal data.</li>
                <li>Request to delete any personal information about you.</li>
                <li>Not be discriminated against for exercising their privacy rights.</li>
              </ul>

              <h2>CHILDREN&rsquo;S ONLINE PRIVACY PROTECTION</h2>
              <p>We are in compliance with the requirements of the GDPR (General Data Protection Regulation), and the California Online Privacy Protection Act (CalOPPA) regarding the protection of the personal data of minors. We do not collect any information from anyone under 13 years of age. Our website are all directed to people who are at least 18 years old or older.</p>

              <h2>EDITING AND DELETING INFORMATION</h2>
              <p>If you believe that any information, we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect. You can change, modify, rectify and delete your Information at any time, please contact us through the contact information.</p>
              <p><b>To opt-out of Skrollo email, follow the instructions included in the email. Your request should be processed within 48 hours.</b></p>

              <h2>SUPPLIERS AND OTHER THIRD PARTIES</h2>
              <p>Except as otherwise expressly included in this Privacy Policy, this document addresses only the use and disclosure of information Skrollo collects from you. If you disclose your information to others, whether other users or suppliers on Skrollo, different rules may apply to their use or disclosure of the information you disclose to them. Skrollo does not control the privacy policies of third parties, and you are subject to the privacy policies of those third parties where applicable. Skrollo is not responsible for the privacy or security practices of other websites on the Internet, even those linked to or from the Skrollo site. Skrollo encourages you to ask questions before you disclose your personal information to others.</p>

              <h2>CHANGES TO THIS PRIVACY POLICY</h2>
              <p>Skrollo will post modifications by date to this Privacy Policy to inform you of any changes. Skrollo reserves the right to modify this Privacy Policy at any time, please review it frequently.</p>

              <h2>CONTACT US</h2>
              <p>If you have questions or concerns about these Privacy Policy and the handling and security of your data on this site, please contact us throw our support page or contact at:</p>
              <p>Team@Skrollo.com</p>
            </b-card-text>
          </b-tab>
          <b-tab :title-link-class="titleLinkClass" title="Cookies Policy">
            <b-card-text :class="contentTextClass">
              <h1>COOKIES POLICY</h1>

              <h2>Welcome to Skrollo!</h2>
              <p>This Cookie Policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use or visit Skrollo website. This Cookie Policy should be read together with our Privacy Policy and our Terms and conditions.</p>
              <p><a href="https://www.skrollo.com">https://www.skrollo.com</a> will ask for your consent before we install a cookie.</p>
              <p><b>Our Cookie Policy is written according to the CalOPPA (California Online Privacy Protection Act) and the GDPR (General Data Protection Regulation - European regulation).</b></p>

              <h2>WHAT ARE COOKIES?</h2>
              <p>“Cookies” are small text files that are stored on your computer or mobile device when you visit a website.</p>
              <p>They allow the website to recognize your device and remember if you have been to the website before.</p>
              <p>Cookies are very common web technology, most website use Cookies and have done for years. Cookies are widely used in order to make website work more efficiently, as well as providing information to the owners of website.</p>
              <p>Cookies are used to measure which parts of the website people visit and to customize your experience. Cookies also provide information that helps us monitor and improve the website’s performance.</p>

              <h2>REFUSING OR WITHDRAWING CONSENT TO THE USE OF COOKIES</h2>
              <p>If you do not want Cookies to be dropped on your device, you can adjust the setting of your Internet browser to reject the setting of all or some Cookies and to alert you when a Cookie is placed on your device. For further information about how to do so, please refer to your browser ‘help’, ‘tool’, or ‘edit’ section. Please note that if you use your browser settings to block all Cookies, including strictly necessary Cookies, you may not be able to access or use all or parts of the functionalities of the Skrollo website.</p>
              <p>If you want to remove previously-stored Cookies, you can manually delete the Cookies at any time. However, this will not prevent the Skrollo website from placing further Cookies on your device unless and until you adjust your Internet browser setting as described above.</p>
              <p>We provide the links for the management and blocking of cookies depending on the browser you use:</p>
              <ul>
                <li>Internet Explorer: http://windows.microsoft.com/es-xl/internet-explorer/delete-manage-cookies#ie=ie-10</li>
                <li>Firefox: http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</li>
                <li>Chrome: https://support.google.com/chrome/answer/95647?hl=en</li>
                <li>Safari: https://www.apple.com/legal/privacy/es/cookies/</li>
              </ul>

              <h2>FIRST-PARTY COOKIES</h2>
              <p>We use Cookies to enhance the performance of our website and personalize your online Skrollo experience.</p>
              <p>Cookies help us to collect information on how people use our website and which pages they visit. They enable us to monitor the number of visitors and to analyze website usage patterns and trends.</p>
              <p>We collect this information anonymously, so it does not identify anyone as an individual and no personal information is stored in our Cookies. We always use Cookie data in a responsible way.</p>
              <p>Our aim is to continually improve the Skrollo online experience. Cookies help to make our website work better and more efficiently. However, you can stop Cookies from being downloaded to your device from Skrollo at any time by selecting the appropriate settings in your browser. Most browsers will tell you how to change your browser settings to notify you when a Cookie is being set or updated, or to restrict or block certain types or all Cookies.</p>

              <h2>THIRD-PARTY COOKIES</h2>
              <p>Third-party cookies may come from partners that provide functional web tools for our site, other website where we advertise and from social networks.</p>
              <p>Skrollo may contract with third-party service providers to send e-mails to users who have provided us with their contact information. To help measure and improve the effectiveness of our e-mail communications, and/or to determine whether messages have been opened and links clicked on, the third-party service providers may place Cookies on the devices of these users.</p>

              <h2>PERSISTENT COOKIES</h2>
              <p>We use persistent Cookies to improve your experience of using Skrollo website. This includes recording your acceptance of our Cookie Policy to remove the cookie message which first appears when you use Skrollo website. Persistent Cookies remain on your device until deleted manually or automatically.</p>

              <h2>SESSION COOKIES</h2>
              <p>Session Cookies are temporary and deleted from your machine when your web browser closes. We use session Cookies to help us track internet usage for improvement of our website. </p>
              <p>You may refuse to accept browser Cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of the Skrollo website. Unless you have adjusted your browser setting so that it will refuse Cookies, our system will issue Cookies when you direct your browser to Skrollo website.</p>
              <p>The data collected by Skrollo website and/or through Cookies that may be placed on your computer will not be kept for longer than is necessary to fulfil the purposes mentioned above. In any event, such information will not be kept for longer than one year.</p>

              <h2>USES OF COOKIES</h2>
              <p>Our Cookies are used for the following purposes:</p>
              <p><b>Strictly Necessary:</b> These Cookies are essential for Skrollo website to perform its basic functions.</p>
              <p><b>Security:</b> We use these Cookies to help identify and prevent potential security risks.</p>
              <p><b>Analytics and Performance:</b> Performance Cookies collect information on how users interact with our website, including what pages are visited most, as well as other analytical data. We use these details to improve how our website function and to understand how users interact with them.</p>
              <p><b>Advertising (Facebook ADS, Google ADS, etc.):</b> These Cookies are used to display relevant advertising to visitors who use our services or visit website we host or provide, as well as to understand and report on the efficacy of ads served on our website. They track details such as the number of unique visitors, the number of times particular ads have been displayed, and the number of clicks the ads have received. They are also used to build user profiles, including showing you ads based on content you’ve viewed on our website. These are set by Skrollo and trusted third party networks and are generally persistent in nature.</p>
              <p><b>GOOGLE Analytics.</b> We use Google Analytics provided by Google, Inc., USA (“Google”). These tool and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage and purchase history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the website and improve our service.</p>

              <h2>CONTACT US</h2>
              <p>If you have questions about this Cookies Policy, please contact us:</p>
              <p>Team@Skrollo.com</p>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <div class="my-4">
      <b-button to="/" :variant="btnColor">
        Back to feed?
      </b-button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { mapMutations } from "vuex";

  export default {
    name: "page_about",
    layout: "default",    
    scrollToTop: true,    
    computed:{
      btnColor() {
        if (this.$store.state.dark) return 'light';
        return 'dark';
      },
      textColor() {
        if (this.$store.state.dark) return 'white';
        return '';
      },
      bgColor() {
        if (this.$store.state.dark) return 'dark';
        return '';
      },
      cardClass() {
        if (this.$store.state.dark) return 'card--dark';
        return '';
      },
      activeTabClass() {
        if (this.$store.state.dark) return 'bg-dark text-white border-gray-800';
        return '';
      },
      titleLinkClass() {
        if (this.$store.state.dark) return 'text-white';
        return 'text-dark';
      },
      contentTextClass() {
        if (this.$store.state.dark) return 'text-white';
        return 'text-dark';
      }
    }
  };
</script>

<style lang="scss">
  // html {
  //   overflow-y: hidden;
  // }

  // #scroll-wrapper {
  //   overflow-y: scroll;
  // }

  .card.card--dark .text-white p,
  .card.card--dark .card-header a.text-white {
    color: #fff!important;
  }

  .card.card--dark .text-white p {
    color: #fff!important;
  }

  .card .text-dark p {
    color: #1d1d1b!important;
  }

  .nav-tabs .nav-link {
    border: 0 !important; 
  }

  .card-post {

    // .card-title {
    //   max-height: 3rem;
    // }
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(254, 208, 77, 0.3);
    }
  }

  .loading {
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: fixed;

    img {
      width: 300px;
      -webkit-animation-name: fade;
      -webkit-animation-duration: 2s;
      animation-name: fade;
      animation-duration: 2s;
      animation-iteration-count: 3;
    }

    @-webkit-keyframes fade {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @keyframes fade {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }

  .loadin {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999999999;
    background-color: #000;

    .spiner {
      width: 12rem;
      height: 12rem;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      position: absolute;
    }
  }

  // #topUp {
  //   position: fixed;
  //   right: 30px;
  //   bottom: -20px;
  //   z-index: 99;
  //   .position {
  //     .icon {
  //       background-color: #dfcd9b;
  //       border-radius: 3px;
  //       margin: 5px 0;
  //       padding: 2px;
  //       cursor: pointer;
  //       img {
  //         width: 40px;
  //       }
  //     }
  //   }
  //   .none {
  //     opacity: 0;
  //     z-index: 999999;
  //     position: relative;
  //     bottom: 95px;
  //   }
  // }
</style>