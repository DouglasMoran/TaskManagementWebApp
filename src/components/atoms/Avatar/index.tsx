type AvatarProps = {
  url: string;
  classContainer?: string;
  classAvatar?: string;
};

const Avatar = ({ url = '', classContainer, classAvatar }: AvatarProps) => {
  return (
    <div
      className={'h-[40px] w-[40px] rounded-3xl bg-tertiary-3 '.concat(
        classContainer ?? '',
      )}
    >
      <img src={url} className={classAvatar} />
    </div>
  );
};

export default Avatar;
