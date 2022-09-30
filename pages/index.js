import Head from 'next/head'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from "../components/Feed";
import Modal from "../components/Modal";
import Widgets from "../components/Widgets";
import { AnimatePresence } from "framer-motion";


export default function Home() {
  return (
    <div className='bg-gray-900'>
      <Head>
        <title>Feed | Job Case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed posts={posts} />
        </div>
        <Widgets articles={articles} />
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>

    </div>
  );
};