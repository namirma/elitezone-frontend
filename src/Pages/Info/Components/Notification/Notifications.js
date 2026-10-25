import React, { useState, useEffect } from 'react';
import './Notifications.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import ApiBaseUrl from '../../../../Api/axios';
import { DateConversion } from '../../../../PersonalFunction/ConvertFormat';
import LoadingDots from '../../../Auth/Components/LoadingDots';
import Flash2_TextEZ02_Icon from '../../../../PublicAssets/Arrow_Icons/Flash2_TextEZ02_Icon.svg'
import { useAppContext } from '../../../../Context/AppContext';

function Notifications() {

  const { UnReadNotif, setUnReadNotif,
    ReadNotif, setReadNotif } = useAppContext();

  const showAllUnread = false;
  const [showAllRead, setShowAllRead] = useState(false);
  const [expandedTexts, setExpandedTexts] = useState({});



  const handleReadUnRead = async (item) => {
    try {
      const response = await ApiBaseUrl.get(`api/profile/messages/${item.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token'),
          Accept: 'application/json',
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setUnReadNotif(prevUnReadNotif => prevUnReadNotif.filter(notification => notification.id !== item.id));
        setReadNotif(prevReadNotif => [...prevReadNotif, item]);
      }

    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  //// Handle Functionality Read All Notif Button
  // const handleReadAllUnRead = async () => {
  //   try {
  //     const response = await ApiBaseUrl.get('api/profile/messages/read-all', {
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('Token'),
  //         Accept: 'application/json',
  //         "Access-Control-Allow-Origin": "*",
  //         'Content-Type': 'application/json',
  //       }
  //     });

  //     if (response.status === 200) {
  //       setReadNotif((prevNotif) => [...prevNotif, ...UnReadNotif]);
  //       setUnReadNotif([]);
  //     }

  //   } catch (error) {
  //     console.error('Error updating message:', error);
  //   }
  // };

  const toggleExpandText = (id) => {
    setExpandedTexts(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <>
      <div>
        <div className='notif-container B_Style'>
          <BackToProfileButton text='پیغام ها' padding='0 0 16px 0' />

          <div className='notif-section' style={{ fontFamily: 'YekanBakhFaNum-Bold' }}>
            <div> خوانده نشده </div>
            <span style={{ color: 'var(--CTA-EZ)', marginRight: '8px' }}> ({UnReadNotif.length}) </span>

            {/* Read All Button */}
            {/* {UnReadNotif.length > 0 && (
              <button className='notif-section-button' onClick={handleReadAllUnRead}>
                خواندن همه
              </button>
            )} */}

          </div>

          {!UnReadNotif ?

            <div style={{ margin: '0 0 16px' }}>
              <LoadingDots Color={'var(--Primary-EZ)'} />
            </div>
            :
            <>
              {UnReadNotif.slice().reverse().slice(0, showAllUnread ? UnReadNotif.length : 2).map((item, index, array) => (
                // <div key={index} className={`notif-unread-item  ${index === array.length - 1 ? 'last-item' : ''}`}>
                <div key={index} className='notif-unread-item'>
                  <div className='notif-title'>
                    <span></span>
                    {item.subject}
                  </div>
                  <div className='notif-content'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: expandedTexts[item.id] || item.body?.length <= 60
                          ? item.body.replace(/\n/g, '<br />')
                          : item.body?.substring(0, 60).replace(/\n/g, '<br />') + '...',
                      }}
                    />
                    {item.body?.length > 60 && (
                      <span
                        onClick={() => toggleExpandText(item.id)}
                        style={{ color: 'var(--Primary-EZ)', cursor: 'pointer' }}
                      >
                        {expandedTexts[item.id] ? ' نمایش کمتر ' : ' نمایش بیشتر '}
                      </span>
                    )}
                  </div>

                  <div className='notif-read-button' onClick={() => handleReadUnRead(item)}> خـوانـدم </div>


                  <div className='notif-receiving-time' style={{ marginTop: '16px' }}>
                    <div className='notif-receiving-time_Title'>  زمان دریافت : </div>
                    <div className='notif-receiving-time_Time'>
                      {item.created_at ? <DateConversion value={item.created_at} /> : 'خطا در دریافت'}
                    </div>
                  </div>


                </div>
              ))}


              {UnReadNotif.length > 2 && (
                <button className='NotifShowMoreButton' onClick={() => setShowAllRead(!showAllRead)}>
                  {showAllRead ?
                    <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
                      <div> بستن </div>
                      <div style={{ display: 'inline-flex', marginRight: '8px', rotate: '90deg' }}> <img src={Flash2_TextEZ02_Icon} alt='img' /> </div>
                    </div>
                    :
                    <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
                      <div> تمام پیغام های من</div>
                      <div style={{ display: 'inline-flex', marginRight: '8px', rotate: '-90deg' }}> <img src={Flash2_TextEZ02_Icon} alt='img' /> </div>
                    </div>
                  }
                </button>
              )}
            </>
          }

          <div className='notif-section'> خوانده شده </div>

          {!ReadNotif ?
            <div style={{ margin: '0 0 16px' }}>
              <LoadingDots Color={'var(--Primary-EZ)'} />
            </div>
            :
            <>
              {ReadNotif.slice().reverse().slice(0, showAllRead ? ReadNotif.length : 2).map((item, index, array) => (
                <div key={index} className={`notif-read-item ${index === array.length - 1 ? 'last-item' : ''}`}>

                  <div className='notif-title'> {item.subject} </div>

                  <div className='notif-content'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: expandedTexts[item.id] || item.body?.length <= 60
                          ? item.body.replace(/\n/g, '<br />')
                          : item.body?.substring(0, 60).replace(/\n/g, '<br />') + '...',
                      }}
                    />
                    {item.body?.length > 60 && (
                      <span
                        onClick={() => toggleExpandText(item.id)}
                        style={{ color: 'var(--Primary-EZ)', cursor: 'pointer' }}
                      >
                        {expandedTexts[item.id] ? ' نمایش کمتر ' : ' نمایش بیشتر '}
                      </span>
                    )}
                  </div>

                  <div className='notif-receiving-time'>
                    <div className='notif-receiving-time_Title'>  زمان دریافت : </div>
                    <div className='notif-receiving-time_Time'>
                      {item.created_at ? <DateConversion value={item.created_at} /> : 'خطا در دریافت'}
                    </div>
                  </div>

                  <div className='notif-receiving-time'>
                    <div className='notif-receiving-time_Title'>  زمان مشاهده : </div>
                    <div className='notif-receiving-time_Time'>
                      {item.read_at ? <DateConversion value={item.read_at} /> : 'نیاز به بروزرسانی'}
                    </div>
                  </div>
                </div>
              ))}

              {ReadNotif.length > 2 && (
                <button className='NotifShowMoreButton' onClick={() => setShowAllRead(!showAllRead)}>
                  {showAllRead ?
                    <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
                      <div> بستن </div>
                      <div style={{ display: 'inline-flex', marginRight: '8px', rotate: '90deg' }}> <img src={Flash2_TextEZ02_Icon} alt='img' /> </div>
                    </div>
                    :
                    <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
                      <div> تمام پیغام های من</div>
                      <div style={{ display: 'inline-flex', marginRight: '8px', rotate: '-90deg' }}> <img src={Flash2_TextEZ02_Icon} alt='img' /> </div>
                    </div>
                  }
                </button>
              )}
            </>
          }

        </div>
      </div>

    </>
  );
}

export default Notifications;
