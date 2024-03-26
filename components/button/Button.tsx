export const Button = ({ text, variant, classname }: { text: string, variant: string, classname?: string }) => {
  const buttonVariants: Record<string, string> = {
    "blue": "bg-primary-blue text-white rounded"
  };
  return (
    <button className={`${buttonVariants[variant]} ${classname}`} >{text}</button>
  );
}