import React from "react";
import PixaBayContext from "../context/PixaBayContext";
import { useContext } from "react";

const Images = () => {
  const { imageData, loading } = useContext(PixaBayContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop:"100px",
          marginBottom:"30px"

        }}
      >
        {loading ? (
          <h3>Loading....</h3>
        ) : (
          imageData.map((data) => (
            <>
              <div key={data.id}>
                {data.largeImageURL && (
                  <img
                    src={data.largeImageURL}
                    alt="*"
                    style={{
                      width: "300px",
                      height: "400px",
                      borderRadius: "10px",
                      border:"1px solid yellow"
                    }}
                  />
                )}
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Images;
