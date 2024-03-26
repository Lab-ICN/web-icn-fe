export const Button = ({ text, variant, classname }: { text: string, variant: string, classname?: string }) => {
  const buttonVariants: Record<string, string> = {
    "blue": "bg-primary-blue text-white hover:bg-white hover:text-primary-blue border-primary-blue hover:border-primary-blue border",
    "white": "bg-white text-primary-blue hover:bg-primary-blue hover:text-white border-white border"
  };
  return (
    <button className={`${buttonVariants[variant]} ${classname} duration-150`} >{text}</button>
  );
}