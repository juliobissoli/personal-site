interface Props {
    projectId: string;
}


export const BannerAnimate: React.FC<Props> = ({ projectId }) => {
  return (
    <img src={`/${projectId}`} className="fade-in h-full w-full object-cover border-0 rounded-xl border-primary" />
  );
};
