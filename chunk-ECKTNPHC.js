import{Aa as c,Ma as e,Na as t,Oa as g,Va as n,Wa as p,ea as m,qa as l,ua as s,va as a}from"./chunk-GKH453GY.js";var f=class d{constructor(i,o){this.el=i;this.renderer=o}timeGreeting="";ngOnInit(){this.setGreeting(),this.observeCard()}setGreeting(){let i=new Date().getHours();i<12?this.timeGreeting="Good morning!":i<18?this.timeGreeting="Good afternoon!":this.timeGreeting="Good evening!"}observeCard(){let i=this.el.nativeElement.querySelector(".content-card"),o=new IntersectionObserver(([r])=>{r.isIntersecting&&(this.renderer.addClass(i,"animate-in"),o.disconnect())},{threshold:.2});o.observe(i)}static \u0275fac=function(o){return new(o||d)(a(m),a(s))};static \u0275cmp=c({type:d,selectors:[["app-about-me"]],decls:39,vars:1,consts:[[1,"about-container"],[1,"content-card"],[1,"highlight"],[1,"work-timeline"],[1,"work-item"],[1,"work-title"],[1,"work-org"],[1,"work-time"],[1,"work-desc"],[1,"profile-image"],["src","/assets/profile.jpeg","alt","Anirudh profile photo"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),n(3,"About "),e(4,"span",2),n(5,"me:"),t()(),e(6,"p")(7,"span",2),n(8),t(),n(9," I'm Anirudh! Originally from India, I'm now based in Chicago."),t(),e(10,"p"),n(11,"I\u2019m a Researcher with interests in Computational Topology, Data Science, and Software Engineering."),t(),e(12,"p"),n(13,"I\u2019m currently working on distributed systems, machine learning, and creative personal projects."),t(),e(14,"p"),n(15,"Outside work, I enjoy solving Rubik's Cubes, gaming, learning Chess, and playing Badminton."),t(),e(16,"h2"),n(17,"Work"),t(),e(18,"div",3)(19,"div",4)(20,"div",5),n(21,"Graduate Research Assistant"),t(),e(22,"div",6),n(23,"DePaul University"),t(),e(24,"div",7),n(25,"Jun 2023 \u2013 Sep 2024"),t(),e(26,"div",8),n(27," Worked on topological data analysis and distributed computing. "),t()(),e(28,"div",4)(29,"div",5),n(30,"Software Developer"),t(),e(31,"div",6),n(32,"Hexagon Manufacturing Intelligence"),t(),e(33,"div",7),n(34,"Dec 2017 \u2013 Jul 2022"),t(),e(35,"div",8),n(36," Built tools for Cabinet Vision. "),t()()()(),e(37,"div",9),g(38,"img",10),t()()),o&2&&(l(8),p(r.timeGreeting))},styles:[".about-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;gap:2.5rem;padding:3rem 2rem;max-width:1200px;margin:0 auto;flex-wrap:wrap}.content-card[_ngcontent-%COMP%]{flex:1 1 0;max-width:700px;padding:2rem;border-radius:1rem;font-family:Inter,sans-serif;transition:background-color .3s,color .3s;background-color:#f9f9f9;color:#111;box-shadow:0 10px 25px #0000001a}  body.dark-mode .content-card{background-color:#1a1a1a;color:#fff;box-shadow:0 12px 30px #0000004d}.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;margin-bottom:1rem}.content-card[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{color:#4f46e5;font-weight:700}.content-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.6;margin-bottom:1.2rem}.profile-image[_ngcontent-%COMP%]{padding-left:2rem;padding-top:4rem;flex:0 0 auto;display:flex;align-items:flex-start;justify-content:center;margin-top:3rem;margin-left:1rem;background-color:transparent}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:220px;height:220px;border-radius:50%;object-fit:cover;box-shadow:0 10px 25px #00000040;transition:transform .3s ease,box-shadow .3s ease}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 12px 32px #0006}  body.dark-mode .profile-image img{box-shadow:0 0 25px #cbcaca14}@media (max-width: 900px){.about-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center;padding:2rem 1.5rem}.profile-image[_ngcontent-%COMP%]{margin:2rem 0 0}.content-card[_ngcontent-%COMP%]{padding:1.75rem}}.work-timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;margin-top:1rem}.work-item[_ngcontent-%COMP%]{padding:1rem 1.25rem;background-color:#fff;border-left:4px solid #4f46e5;border-radius:.75rem;box-shadow:0 4px 14px #0000000d;transition:background-color .3s ease}  body.dark-mode .work-item{background-color:#2a2a2a;color:#e0e0e0;box-shadow:0 6px 20px #0000004d}.work-item[_ngcontent-%COMP%]:hover{box-shadow:0 6px 18px #0000001a}.work-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.1rem}.work-org[_ngcontent-%COMP%]{font-weight:500;font-size:.95rem;color:#666}  body.dark-mode .work-org{color:#aaa}.work-time[_ngcontent-%COMP%]{font-size:.85rem;color:#999;margin-bottom:.5rem}  body.dark-mode .work-time{color:#ccc}.work-desc[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.5}"]})};export{f as AboutMeComponent};
