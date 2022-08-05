import React from "react";
import Image from "../images/image1.jpg";

interface IReactModalImageProps {
  smallImgSrc: string;
  largeImgSrc: string;
}

export const ReactModalImage: React.FC<IReactModalImageProps> = ({
  smallImgSrc,
  largeImgSrc,
}) => {
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    return () => {
      setOpenModal(false);
    };
  }, []);

  return (
    <div className="r-img-container">
      {isOpenModal ? (
        <div className="r-img-modal-container">
          <div className="r-img-modal-content">
            <div className="r-img-modal-action">
              <button
                onClick={() => setOpenModal(false)}
                style={{ borderRadius: 10 }}
              >
                X
              </button>
            </div>
            <img
              className="r-img-modal"
              src={Image}
              alt="r-img"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      ) : (
        <img
          className="r-img"
          src={Image}
          alt="r-img"
          width="100"
          height="100"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      )}
    </div>
  );
};
