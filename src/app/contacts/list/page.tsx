import { getContacts, getContact } from "@/lib/contact";
export default async function listPage() {
  const contacts = await getContacts();
  const first = await getContact("some-id");
  return (
    <div>
      複数
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
      単一
      <div>
        {first?.name} - {first?.email}
      </div>
    </div>
  );
}
