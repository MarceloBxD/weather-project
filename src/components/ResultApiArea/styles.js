import styled from "styled-components";

export const GeralContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 400px;
  margin-top: 30px;
`;

export const CityName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 19px;
  color: #fff;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  object-fit: contain;
  background-position: center; ;
`;

export const TemperatureInMoment = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const addInfos = styled.div`
  width: 280px;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-weight: 300;
  font-size: 20px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 17px;
  font-weight: 700;
  align-items: center;
  margin-top: -10px;
  gap: 7px;
`;

export const CitySearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

export const Data = styled.div`
  gap: 15px;
`;

export const ImportantData = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const LocationData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border-radius: 10px;
`;

export const DataCity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Typography = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export const Temperature = styled.h1`
  color: #fff;
  font-size: 21px;
`;

export const CloudImg = styled.img`
  width: 284px;
  height: 120px;
  background-color: transparent;
  object-fit: contain;
  background-position: center;
`;

export const MaxMin = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
  align-items: center;
`;
