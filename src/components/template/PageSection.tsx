interface PageSectionProps {
  title: string;
  children?: any;
}

export default function PageSection(props: PageSectionProps) {
  return (
    <section className="w-full border-b-2 py-4 border-gray-400 dark:border-gray-600">
      <h5 className="font-light uppercase dark:text-gray-400 text-gray-600">
        {props.title}
      </h5>
      <div className="flex gap-4 flex-wrap p-4">{props.children}</div>
    </section>
  );
}
