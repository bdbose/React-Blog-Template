import './App.scss';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { ReactComponent as Group } from './assets/group.svg';
import { ReactComponent as DownArrow } from './assets/downarrow.svg';
import { ReactComponent as Location } from './assets/location.svg';
import { ReactComponent as Pen } from './assets/pen.svg';
import { ReactComponent as Warn } from './assets/warn.svg';
import { ReactComponent as Edit } from './assets/edit.svg';
import { ReactComponent as Leave } from './assets/leave.svg';
import Cards from './components/Cards';
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import { Context } from './store';
import RecommCard from './components/RecommCard.js';
import { ReactComponent as Thumb } from './assets/thumb.svg';

const Data = [
  {
    type: '✍️ Article',
    title: ' What if famous brands had regular fonts? Meet RegulaBrands!',
    desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',

    profileImg:
      'https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
      'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Joseph Gray',
    views: '1.4k',
  },
];

const Recomm = [
  {
    img: 'https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVpc3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Leisure',
  },
  {
    img: 'https://images.unsplash.com/photo-1591848478625-de43268e6fb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWN0aXZpc218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Activism',
  },

  {
    img: 'https://images.unsplash.com/photo-1619646286047-c6681c24a695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'MBA',
  },
  {
    img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhpbG9zb3BoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Philosophy',
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const { state } = useContext(Context);
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
          <button
            className='join-btn'
            style={{
              backgroundColor: state.user.logged ? 'white' : '',
              border: state.user.logged ? '0.8px solid #989899' : '0',
              color: state.user.logged ? '#6A6A6B' : '',
            }}>
            {!state.user.logged ? (
              <>
                <Group />
                Join Group
              </>
            ) : (
              <>
                <Leave /> Leave Group
              </>
            )}
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
            <Cards key={i.type} {...i} />
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
          {state.user.logged && (
            <div className='recommendation'>
              <h2>
                <Thumb /> Recommended Groups
              </h2>
              {Recomm.map((i) => {
                return <RecommCard key={i.name} {...i} />;
              })}
              <a href='/'>Show More...</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
