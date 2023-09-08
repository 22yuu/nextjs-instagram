import CloseIcon from './ui/icons/CloseIcon';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          // 이벤트 타겟이 지금 이벤트가 발생한(currentTarget)과 동일하면 모달을 닫는다.
          // 즉, 모달 내부를 클릭한 것이 아니라 모달 외부를 클릭한 것임.
          onClose();
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white "
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      <div className="bg-white w-4/5 h-3/5 max-w-7xl">{children}</div>
    </section>
  );
}
