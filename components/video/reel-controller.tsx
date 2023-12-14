import classNames from "classnames";
export const ReelController = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <video
          controls
          loop
          src="/reel.mp4"
          className={classNames(
            "relative mt-8 rounded-xl border border-white/10 transition-opacity delay-[680ms]"
          )}
        ></video>
      </div>
    </>
  );
};
