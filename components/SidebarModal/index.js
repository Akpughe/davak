import React from 'react';

const Close = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#8F9BB3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z"
      fill="#8F9BB3"
    />
  </svg>
);

const SidebarModal = ({ show, handleShow, data }) => {
  return (
    <>
      {show && (
        <div
          className="relative z-[999]"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-auto">
            <div className="absolute inset-0 overflow-auto">
              <div className="pointer-events-none fixed overflow-auto inset-y-0 right-0 flex max-w-full">
                <div className="pointer-events-auto relative overflow-auto w-screen sm:max-w-lg max-w-full">
                  <div className="flex h-full flex-col bg-white shadow-xl relative overflow-auto">
                    <div className="flex items-center justify-between px-4 pt-8 sm:px-10 border-b pb-3 mb-3">
                      <button
                        onClick={() => handleShow()}
                        className="none-button"
                        type="button"
                      >
                        <Close />
                      </button>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow();
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Back To Projects.
                      </a>
                    </div>
                    <div className="relative mt-5 flex-1 px-4 pb-32 sm:px-6 overflow-auto ">
                      <div className="absolute inset-0 px-4 sm:px-10">
                        <div
                          className="h-full border-gray-200"
                          aria-hidden="true"
                        >
                          <div>
                            <h1 className="text-2xl font-bold">{data.title}</h1>
                            <p className="text-sm font-light">
                              {data.description}
                            </p>
                          </div>

                          <div className="flex border w-full mt-5">
                            <img
                              src={data.imageUrl}
                              alt={data.title}
                              className="w-full h-full"
                            />
                          </div>

                          <div className="mt-5">
                            <h2 className="text-lg font-normal">About</h2>
                            <p className="text-base font-light text-gray-700 mt-1">
                              {data.about}
                            </p>
                          </div>
                          <div className="mt-5">
                            <h2 className="text-lg font-normal">
                              Technologies
                            </h2>
                            <div className="flex flex-wrap mt-4">
                              {data.technologies.map((tech) => (
                                <span key={tech} className="bg-[#eee9e4] py-1 px-3 mr-1 text-xs text-black rounded capitalize font-bold mb-1">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-8">
                            <h2 className="text-lg font-normal">Website</h2>
                            <p>
                              <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                               {data.link}
                              </a>
                            </p>
                          </div>
                          {data.github && <div className="mt-8">
                            <h2 className="text-lg font-normal">Github</h2>
                            <p>
                              <a
                                href={data.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                               {data.github}
                              </a>
                            </p>
                          </div>}
                        </div>
                      </div>
                    </div>
                    <a
                      href={data.link}
                      className="flex justify-center items-center bg-black w-full bottom-0 left-0 text-white text-center p-4"
                      target="_blank"
                      id="cardHover"
                      rel="noopener noreferrer"
                    >
                      Open Project{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        className="ml-2"
                      >
                        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarModal;
