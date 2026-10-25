import React, { useState, useEffect } from 'react'
import './OverlayButton.css';
import ApiBaseUrl from '../../Api/axios';
import LoadingDots from '../../Pages/Auth/Components/LoadingDots';

//Context
import { useAppContext } from '../../Context/AppContext';

function OverlayButton(props) {

  //Context
  const { Name, Family, NationalCode, Email, setDuplicatedEmail, Day, Month, Year,
    CityId,
    ProvinceId,
    Company, EconomicCode, NationalId, RegisterId, LandlineNumber, ProfileDataIsEmpty,

  } = useAppContext();

  const [IsLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState(false);
  const Birthday = Year + '/' + Month + '/' + Day;
  const LegalInputs = [Company, EconomicCode, NationalId, RegisterId, LandlineNumber]
  const [EntityState, setEntityState] = useState('real');

  useEffect(() => {
    setEntityState(LegalInputs.every((item) => item.length >= 1) && !props.DeleteLegalInfo ? 'legal' : 'real')
  }, [LegalInputs])

  const handleClick = async (e) => {
    e.preventDefault();

    if (!props.disableOnClick) {
      setIsLoading(true)
      try {
        const endpoint = 'api/profile';
        const method = ProfileDataIsEmpty ? 'post' : 'put';
        const SendRequest = await ApiBaseUrl[method](endpoint, {

          name: Name,
          family: Family,
          national_code: NationalCode,
          province_id: ProvinceId,
          city_id: CityId,
          entity: EntityState,

          company: EntityState === 'legal' ? Company : undefined,
          economic_code: EntityState === 'legal' ? EconomicCode : undefined,
          national_id: EntityState === 'legal' ? NationalId : undefined,
          register_id: EntityState === 'legal' ? RegisterId : undefined,
          phone: EntityState === 'legal' ? LandlineNumber : undefined

        },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('Token'),
              Accept: 'application/json',
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
            }
          })

        if (SendRequest.status === 200) {
          setError(false)
          window.location.reload();
        } else {
          setIsLoading(false)
          setError(true)
          setDuplicatedEmail(false)
        }

      }

      catch (error) {
        setIsLoading(false)
        setError(true)
        setDuplicatedEmail(false)
      }
    }

    if (props.sendFromEmail) {
      setIsLoading(true)
      try {
        const endpoint = 'api/profile/verify-email';
        const SendRequest = await ApiBaseUrl.post(endpoint, {
          email: Email,
        },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('Token'),
              Accept: 'application/json',
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
            }
          })

        if (SendRequest.status === 200) {
          setError(false);
          const params = new URLSearchParams({ success: true, email: Email });
          window.location.href = `${window.location.pathname}?${params.toString()}`;
        } else {
          setIsLoading(false)
          setError(true)
          setDuplicatedEmail(false)
        }
      }

      catch (error) {
        if (error.response.status === 500) {
          setIsLoading(false)
          setError(false)
          setDuplicatedEmail(true)
        } else {
          setIsLoading(false)
          setError(true)
          setDuplicatedEmail(false)
        }

      }
    }

    if (props.sendFromBirthday) {
      setIsLoading(true)
      try {
        const endpoint = 'api/profile';
        const SendRequest = await ApiBaseUrl.post(endpoint, {
          birthday: Birthday,
          entity: EntityState,
        },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('Token'),
              Accept: 'application/json',
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
            }
          })

        if (SendRequest.status === 200) {
          setError(false)
          window.location.reload();
        } else {
          setIsLoading(false)
          setError(true)
          setDuplicatedEmail(false)
        }

      }

      catch (error) {
        setIsLoading(false)
        setError(true)
        setDuplicatedEmail(false)
      }
    }

  }

  return (
    <>
      <button
        onClick={handleClick}
        className='overlays-button D_Style'
        type="submit"
        style={{ backgroundColor: props.backgroundcolor, cursor: props.Cursor }}
        disabled={props.disabled}
      >
        {props.IsLoading || IsLoading ? <LoadingDots Color='white' /> : props.text}
      </button>

      <div style={{ display: props.Error || Error ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>
    </>
  )
}

export default OverlayButton