import classNames from "classnames";
export const ReelContainer = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        src="/reel.mp4"
        className={classNames(
          "relative z-10 rounded-lg transition-opacity delay-[680ms]"
        )}
      ></video>
    </>
  );
};
