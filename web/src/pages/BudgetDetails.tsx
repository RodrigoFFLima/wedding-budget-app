import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";
import { BackButton } from "../components/BackButton";

interface Supplier {
  id: number;
  name: string;
  value: number;
}

export function BudgetDetails() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    { id: 1, name: "Buffet Santa Festa", value: 45000 },
    { id: 2, name: "Fotógrafo Amor em Foco", value: 12000 },
  ]);

  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleAddSupplier = () => {
    if (!newName || !newValue) return;
    const newSupplier: Supplier = {
      id: Date.now(),
      name: newName,
      value: parseFloat(newValue),
    };
    setSuppliers([...suppliers, newSupplier]);
    setNewName("");
    setNewValue("");
  };

  const handleEdit = (id: number, name: string, value: number) => {
    const updated = suppliers.map((s) =>
      s.id === id ? { ...s, name, value } : s
    );
    setSuppliers(updated);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-6 flex gap-2">
        <BackButton />
        <h2 className="text-2xl font-bold text-center mb-6">
          Orçamento por Fornecedor
        </h2>
      </div>
      <div className="mb-6 flex gap-2">
        <Input
          placeholder="Nome do Fornecedor"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          placeholder="Valor"
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <Button onClick={handleAddSupplier}>Adicionar</Button>
      </div>
      <div className="space-y-4">
        {suppliers.map((supplier) => (
          <Card
            key={supplier.id}
            className="p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{supplier.name}</p>
              <p className="text-green-600">R$ {supplier.value.toFixed(2)}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const newName = prompt("Editar nome:", supplier.name);
                const newValue = prompt(
                  "Editar valor:",
                  supplier.value.toString()
                );
                if (newName && newValue) {
                  handleEdit(supplier.id, newName, parseFloat(newValue));
                }
              }}
            >
              Editar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
