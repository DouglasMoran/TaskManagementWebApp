type AvatarProps = {
  url: string;
  classContainer?: string;
  classAvatar?: string;
};

const Avatar = ({ url = '', classContainer, classAvatar }: AvatarProps) => {
  return (
    <div
      className={'h-10 w-10 rounded-3xl bg-neutral-6 overflow-hidden '.concat(
        classContainer ?? '',
      )}
    >
      <img src={url} className={classAvatar} />
    </div>
  );
};

export default Avatar;
