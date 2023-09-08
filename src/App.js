import React from 'react'
import Navbar from './components/Navbar'
import VideoSection from './components/VideoSection'
import Sections from './components/Sections'
import LastDiv from './components/LastDiv'
import SectionTwo from './components/SectionTwo'
import FirstContainer from './components/FirstContainer'
import HeadSection from './components/HeadSection'
import Mainarticle from './components/Mainarticle'
import IndusRelvnt from './components/IndusRelvnt'
import DelOutComes from './components/DelOutComes'
import SummaryDiv from './components/SummaryDiv'
import Comment from './components/Comment'
import Notes from './components/Notes'
import Footer from './components/Footer'
import './App.css'
import './mediaqueries.css'
import ClickTop from './components/ClickTop'
import Chat from './components/Chat'
import NoteState from './context/comments/noteState'
// import weLogo from "./img/weLogo-dark.svg"

export default function App() {
    return (
        <>
            <NoteState>
                <Navbar />
                <VideoSection />
                <Sections />
                <LastDiv />
                <SectionTwo />
                <FirstContainer />
                <HeadSection />
                <Mainarticle />
                <IndusRelvnt />
                <DelOutComes />
                <SummaryDiv />
                <Comment />
                <Notes />
                <Footer />
                <ClickTop />
                <Chat />
            </NoteState>
        </>
    );
}
