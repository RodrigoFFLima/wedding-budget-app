import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";
import { BackButton } from "../components/BackButton";

// Tipo para convidado
interface Guest {
  id: number;
  name: string;
  confirmed: boolean;
  specialRequest: string;
}

export function Guests() {
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: 1,
      name: "João da Silva",
      confirmed: true,
      specialRequest: "Vegetariano",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      confirmed: false,
      specialRequest: "Sem glúten",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newSpecialRequest, setNewSpecialRequest] = useState("");

  const handleToggleConfirmation = (id: number) => {
    setGuests((prevGuests) =>
      prevGuests.map((guest) =>
        guest.id === id ? { ...guest, confirmed: !guest.confirmed } : guest
      )
    );
  };

  const handleAddGuest = () => {
    if (!newName || newSpecialRequest === undefined) return;
    const newGuest: Guest = {
      id: Date.now(),
      name: newName,
      confirmed: false, // Inicializa como "não confirmado"
      specialRequest: newSpecialRequest,
    };
    setGuests([...guests, newGuest]);
    setNewName("");
    setNewSpecialRequest("");
  };

  const handleEdit = (
    id: number,
    name: string,
    confirmed: boolean,
    specialRequest: string
  ) => {
    const updated = guests.map((g) =>
      g.id === id ? { ...g, name, confirmed, specialRequest } : g
    );
    setGuests(updated);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-6 flex gap-2">
        <BackButton />
        <h2 className="text-2xl font-bold text-center mb-6">Convidados</h2>
      </div>
      <div className="mb-6 flex gap-2">
        <Input
          placeholder="Nome do Convidado"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          placeholder="Requisição Especial"
          value={newSpecialRequest}
          onChange={(e) => setNewSpecialRequest(e.target.value)}
        />
        <Button onClick={handleAddGuest}>Adicionar</Button>
      </div>
      <div className="space-y-4">
        {guests.map((guest) => (
          <Card
            key={guest.id}
            className="p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{guest.name}</p>
              <p className="text-sm text-gray-500">
                Confirmação: {guest.confirmed ? "Confirmado" : "Pendente"}
              </p>
              <p className="text-green-600">
                Requisição Especial: {guest.specialRequest}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const newName = prompt("Editar nome:", guest.name);
                const newConfirmed = confirm("Confirmar presença?");
                const newSpecialRequest = prompt(
                  "Editar requisição especial:",
                  guest.specialRequest
                );
                if (newName && newSpecialRequest !== null) {
                  handleEdit(
                    guest.id,
                    newName,
                    newConfirmed,
                    newSpecialRequest
                  );
                }
              }}
            >
              Editar
            </Button>
            <Button
              variant="outline"
              onClick={() => handleToggleConfirmation(guest.id)}
            >
              {guest.confirmed ? "Desmarcar" : "Confirmar"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
