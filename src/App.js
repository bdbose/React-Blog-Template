import './App.scss';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { ReactComponent as Group } from './assets/group.svg';
import { ReactComponent as DownArrow } from './assets/downarrow.svg';
import { ReactComponent as Location } from './assets/location.svg';
import { ReactComponent as Pen } from './assets/pen.svg';
import { ReactComponent as Warn } from './assets/warn.svg';
import { ReactComponent as Edit } from './assets/edit.svg';
import Cards from './components/Cards';
import { useState } from 'react';
import Modal from './components/Modal';

const Data = [
  {
    type: '✍️ Article',
    title: ' What if famous brands had regular fonts? Meet RegulaBrands!',
    desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',

    profileImg:
      'https://images.unsplash.com/photo-1549285593-e4d91bc39e62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    name: 'Sarthak Kamra',
    views: '1.4k',
    Img: 'https://i.ibb.co/XsG3XYj/Rectangle-5.png',
  },
  {
    type: '🔬️ Education',
    title:
      'Tax Benefits for Investment under National Pension Scheme launched by Government',
    desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',

    profileImg:
      'https://images.unsplash.com/photo-1549285593-e4d91bc39e62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    name: 'Sarah West',
    views: '1.4k',
    Img: 'https://i.ibb.co/wzgs9Cp/Rectangle-5-1.png',
  },
  {
    type: '🗓️ Meetup',
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    event: {
      date: 'Fri, 12 Oct, 2018',
      location: 'Ahmedabad, India',
    },
    visit: 'Visit Website',
    profileImg:
      'https://images.unsplash.com/photo-1549285593-e4d91bc39e62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    name: 'Ronal Jones',
    views: '1.4k',
    Img: 'https://i.ibb.co/9NYfH4x/Rectangle-5-2.png',
  },
  {
    type: '💼️ Job',
    title: 'Software Developer',
    job: {
      company: 'Innovaccer Analytics Private Ltd.',
      location: 'Noida, India',
    },
    visit: 'Apply on Timesjobs',
    profileImg:
      'https://images.unsplash.com/photo-1549285593-e4d91bc39e62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    name: 'Joseph Gray',
    views: '1.4k',
  },
];

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='App'>
      <Modal open={open} setOpen={setOpen} />
      <div className='mobile-edit-btn'>
        <Edit />
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <Banner setOpen={setOpen} />

      <div className='subbar-wrapper'>
        <div className='elements'>
          <div className='sub-elements active'>All Posts(32)</div>
          <div className='sub-elements'>Article</div>
          <div className='sub-elements'>Event</div>
          <div className='sub-elements'>Education</div>
          <div className='sub-elements'>Job</div>
        </div>
        <div className='btn-wrapper'>
          <button className='post-btn'>
            Write a Post
            <DownArrow />
          </button>
          <button className='join-btn'>
            <Group />
            Join Group
          </button>
        </div>
      </div>
      <div className='post-count'>
        <span>Posts(368)</span>
        <select>
          <option>Filter: All</option>
        </select>
      </div>
      <div className='posts-wrapper'>
        <div className='posts-container'>
          {Data.map((i) => (
            <Cards {...i} />
          ))}
        </div>

        <div className='location-wrapper'>
          <div className='location-container'>
            <div>
              <Location />
              <input defaultValue='Noida, India' />
            </div>
            <Pen />
          </div>
          <div className='location-message'>
            <Warn />
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
