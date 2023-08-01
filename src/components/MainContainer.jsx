import { Route, Routes } from "react-router-dom";
import CardSection from "./CardSection";
import Layout from "./Layout";
import TableSection from "./TableSection";

const MainContainer = () => {
  const homeItems = [
    {
      title: "Conference Feedback Form",
      link: "https://form.jotform.com/232083259368462",
    },
    {
      title: "Arise Asia Conference Response - 123 GO",
      link: "https://forms.gle/wVHrbRnnEAfgq3VH6",
    },
    {
      title: "GO NOW Applications",
      link: "https://form.jotform.com/231630446225449",
    },
    {
      title: "Costly Generosity in Action",
      link: "/giving",
    },
    {
      title: "Program Schedule",
      link: "/schedule",
    },
    {
      title: "Speaker Bios",
      link: "/speakers",
    },
    {
      title: "Session Translation Zoom Links",
      link: "/translation",
    },
    {
      title: "Helpful Resources",
      link: "/helpful-resources",
    },
  ];

  const givingItems = [
    {
      title: "Give Now",
      link: "https://www.totalideas.org/Costly-Generosity-In-Action",
    },
  ];
  const givingVerse = `"And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. For I testify that they gave as much as they were able, and even beyond their ability."`;
  const givingBlurb = `Arise Asia 2023 started with a vision to inspire the next generation to take the gospel throughout Asia and to the world. Over the past few days, we have been tremendously blessed by the move of God through the messages, worship, sessions, workshops, panels, and many others that would be too long to list them all out. And from the messages and exhortations, we were challenged to answer the call that it is more blessed to give than to receive.
Now is the time to respond with generosity as we give towards the Costly Generosity in Action to raise all the funds needed as we come to the close of Arise Asia 2023. Are you ready to rise to the challenge and partner together in generosity?`;
  const scheduleItems = [
    { title: "Day 1 - Tue, July 25", link: "/schedule/day-1.jpg" },
    { title: "Day 2 - Wed, July 26", link: "/schedule/day-2.jpg" },
    { title: "Day 3 - Thu, July 27", link: "/schedule/day-3.jpg" },
    { title: "Day 4 - Fri, July 28", link: "/schedule/day-4.jpg" },
    { title: "Day 5 - Sat, July 29", link: "/schedule/day-5.jpg" },
  ];
  const speakersItems = [
    { title: "Plenary Speakers", link: "/speakers/plenary" },
    { title: "Workshop Speakers", link: "/speakers/workshop" },
  ];
  const translationItems = [
    {
      title: "Tue, July 25 Night",
      link: "https://us02web.zoom.us/j/86832514102?pwd=QnFkd1FVNkhMc1daR0RFTVd0K2Jmdz09",
    },
    {
      title: "Wed, July 26 Morning",
      link: "https://us02web.zoom.us/j/81223109434?pwd=RUQ3bWROU0RLSEdwYVFxNWpxQ0g2UT09",
    },
    {
      title: "Wed, July 26 Night",
      link: "https://us02web.zoom.us/j/85129782039?pwd=Ujg5LytGc29CNUtQOWhYSGs3TUxxUT09",
    },
    {
      title: "Thu, July 27 Morning",
      link: "https://us02web.zoom.us/j/82654998409?pwd=cFRmWkFVY0hkeEVpKzhLRGxFV01kQT09",
    },
    {
      title: "Thu, July 27 Night",
      link: "https://us02web.zoom.us/j/88935156863?pwd=NThjam56SmVzNVVGdm1xV3RiMk1sUT09",
    },
    {
      title: "Fri, July 28 Morning",
      link: "https://us02web.zoom.us/j/89774891907?pwd=TmIwZE83ZGpBSkYzNUtmcmpvNSt1Zz09",
    },
    {
      title: "Fri, July 28 Night",
      link: "https://us02web.zoom.us/j/82624185601?pwd=bkRINGJpdEJxWmNOT0JkZTVvaUNrUT09",
    },
    {
      title: "Sat, July 29 Morning",
      link: "https://us02web.zoom.us/j/81045025169?pwd=M0pEeWpuaG10Wjg5NTJOS0o0VmZiQT09",
    },
  ];
  const resourceItems = [
    {
      title: "Venue Instructions",
      link: "/venue-instructions",
    },
    {
      title: "Workshops",
      link: "/workshops",
    },
    {
      title: "Unstoppable by Asiri Fernando E-Book",
      link: "/asiri-book.jpeg",
    },
    {
      title: "Awaken Generation Online Worship Mentoring School",
      link: "/awaken-generation.jpeg",
    },
    {
      title: "Spotify Playlist",
      link: "https://open.spotify.com/playlist/7nlYXCTiicyRnnuGSH7zh7?si=ODnIjmzCRgCi81YbHMUa3Q",
    },
  ];
  const workshopItems = [
    {
      title: "Wed, July 26",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-1.jpeg",
    },
    {
      title: "Wed, July 26",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-2.jpeg",
    },
    {
      title: "Fri, July 28",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-3.jpeg",
    },
    {
      title: "Fri, July 28",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-4.jpeg",
    },
  ];
  const breakoutItems = {
    headers: ["Country/Region", "Room Number"],
    body: [
      ["India", "120"],
      ["Chinese World", "119"],
      ["Hong Kong", "103"],
      ["Thailand", "104"],
      ["Mongolia", "105"],
      ["English Speaking SEA", "106"],
      ["South Asia", "107"],
      ["Mainland SEA", "108"],
      ["Pakistan", "109"],
      ["Korea", "110"],
      ["Taiwan", "111"],
      ["Philippines", "112"],
      ["Japan", "115"],
      ["Vietnam", "116"],
      ["Central Asia", "117"],
      ["MENA", "Novotel Meeting Room"],
      ["Indonesia", "118"],
      ["Free to Choose", "--"],
    ],
  };
  const venueItems = [
    {
      title: "Impact Center Floor Map",
      link: "/floor-map.pdf",
    },
    {
      title: "Ibis to Impact Walking Directions",
      link: "/walking-directions.pdf",
    },
    {
      title: "Country/Region Breakout Room Assignments",
      link: "/breakouts",
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout title="Arise Asia Info">
            <CardSection items={homeItems} />
          </Layout>
        }
      />
      <Route
        path="/giving"
        element={
          <Layout title="Costly Generosity in Action">
            <p className="text-xl italic">{givingVerse}</p>
            <p className="text-xl text-right">2 Corinthians 8:1-3, NIV</p>
            <CardSection items={givingItems} />
            {givingBlurb &&
              givingBlurb.split("\n").map((item, idx) => (
                <p key={idx} className="text-xl">
                  {item}
                </p>
              ))}
          </Layout>
        }
      />
      <Route
        path="/schedule"
        element={
          <Layout title="Program Schedule">
            <CardSection items={scheduleItems} />
          </Layout>
        }
      />
      <Route
        path="/speakers"
        element={
          <Layout title="Speaker Bios">
            <CardSection items={speakersItems} />
          </Layout>
        }
      />
      <Route
        path="/speakers/plenary"
        element={
          <Layout title="Plenary Speakers">
            <p className="text-center">Plenary Speakers</p>
          </Layout>
        }
      />
      <Route
        path="/speakers/workshop"
        element={
          <Layout title="Workshop Speakers">
            <p className="text-center">Workshop Speakers</p>
          </Layout>
        }
      />
      <Route
        path="/translation"
        element={
          <Layout title="Session Translation Zoom Links">
            <CardSection items={translationItems} />
          </Layout>
        }
      />
      <Route
        path="/helpful-resources"
        element={
          <Layout title="Helpful Resources">
            <CardSection items={resourceItems} />
          </Layout>
        }
      />
      <Route
        path="/workshops"
        element={
          <Layout title="Workshops">
            <CardSection items={workshopItems} />
          </Layout>
        }
      />
      <Route
        path="/breakouts"
        element={
          <Layout title="Country/Region Breakout Room Assignments">
            <TableSection items={breakoutItems} />
          </Layout>
        }
      />
      <Route
        path="/venue-instructions"
        element={
          <Layout title="Venue Instructions">
            <CardSection items={venueItems} />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <p className="text-center">Uh oh! Page not found!</p>
          </Layout>
        }
      />
    </Routes>
  );
};

export default MainContainer;
