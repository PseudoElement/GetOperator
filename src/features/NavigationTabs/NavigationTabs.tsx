import React, { useEffect, useState } from "react";
import TabGroup from "../../components/TabGroup/TabGroup";
import s from "./NavigationTabs.module.scss";
import { links } from "./data";
import Tab from "../../components/TabGroup/Tab/Tab";

export type TabNames = "1st" | "2nd" | "3th" | "4th" | "5th";

const NavigationTabs = () => {
     const [activeTab, setActiveTab] = useState<TabNames | null>(null);

     useEffect(() => {
          console.log(activeTab);
     }, [activeTab]);
     return (
          <TabGroup>
               <Tab id="1st" isActive={activeTab === "1st"} title="Tab 1" setActiveTab={setActiveTab}>
                    <img className={s.image} src={"https://picsum.photos/id/200/500/500"} alt="Pic" />
                    <p className={s.text}>The #1 app to watch, clip, and share your awesome gaming moments with your friends and the world! </p>
                    <div className={s.links}>
                         {links.map((link) => (
                              <a target="_blanc" href={link.url}>
                                   {link.name}
                              </a>
                         ))}
                    </div>
               </Tab>
               <Tab id="2nd" isActive={activeTab === "2nd"} title="Tab 2" setActiveTab={setActiveTab}>
                    <img className={s.image} src={"https://picsum.photos/id/201/500/500"} alt="Pic" />
                    <p className={s.text}>With our world-class tools, we make it incredibly easy to share your videos. Get started today! </p>
               </Tab>
               <Tab id="3th" isActive={activeTab === "3th"} title="Tab 3" setActiveTab={setActiveTab}>
                    {/* <img className={s.image} src={"https://picsum.photos/id/202/500/500"} alt="Pic" /> */}
                    <p className={s.text}>
                         Damn this shit slaps 😳 . Its kinda unfair that not many people recognise and appreciate Jeshi but I just hope he doesn't quit and im
                         pretty sure he won't cus he doing it for his love for music and not just for money and clout . My man's gonna shock the whole world
                         very soon . Big ups to you my brother.
                    </p>
               </Tab>
          </TabGroup>
     );
};

export default NavigationTabs;
