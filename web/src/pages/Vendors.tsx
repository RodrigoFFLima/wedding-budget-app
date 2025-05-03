import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";
import { BackButton } from "../components/BackButton";

// Tipo para fornecedor
interface Vendor {
  id: number;
  name: string;
  category: string;
  estimatedCost: number;
  contractStatus: boolean;
}

export function Vendors() {
  const [vendors, setVendors] = useState<Vendor[]>([
    {
      id: 1,
      name: "Fotografia Premium",
      category: "Fotógrafo",
      estimatedCost: 2500,
      contractStatus: true,
    },
    {
      id: 2,
      name: "Buffet Delícias",
      category: "Catering",
      estimatedCost: 4000,
      contractStatus: false,
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newEstimatedCost, setNewEstimatedCost] = useState(0);
  const [newContractStatus, setNewContractStatus] = useState(false);

  const handleToggleContractStatus = (id: number) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id
          ? { ...vendor, contractStatus: !vendor.contractStatus }
          : vendor
      )
    );
  };

  const handleAddVendor = () => {
    if (!newName || !newCategory || newEstimatedCost <= 0) return;
    const newVendor: Vendor = {
      id: Date.now(),
      name: newName,
      category: newCategory,
      estimatedCost: newEstimatedCost,
      contractStatus: newContractStatus,
    };
    setVendors([...vendors, newVendor]);
    setNewName("");
    setNewCategory("");
    setNewEstimatedCost(0);
    setNewContractStatus(false);
  };

  const handleEdit = (
    id: number,
    name: string,
    category: string,
    estimatedCost: number,
    contractStatus: boolean
  ) => {
    const updated = vendors.map((v) =>
      v.id === id ? { ...v, name, category, estimatedCost, contractStatus } : v
    );
    setVendors(updated);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-6 flex gap-2">
        <BackButton />
        <h2 className="text-2xl font-bold text-center mb-6">Fornecedores</h2>
      </div>
      <div className="mb-6 flex gap-2">
        <Input
          placeholder="Nome do Fornecedor"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          placeholder="Categoria"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Preço Estimado"
          value={newEstimatedCost}
          onChange={(e) => setNewEstimatedCost(Number(e.target.value))}
        />
        <Button onClick={handleAddVendor}>Adicionar</Button>
      </div>
      <div className="space-y-4">
        {vendors.map((vendor) => (
          <Card
            key={vendor.id}
            className="p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{vendor.name}</p>
              <p className="text-sm text-gray-500">
                Categoria: {vendor.category}
              </p>
              <p className="text-sm text-gray-500">
                Preço Estimado: R$ {vendor.estimatedCost}
              </p>
              <p className="text-sm text-gray-500">
                Status de Contrato:{" "}
                {vendor.contractStatus ? "Contratado" : "Não contratado"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const newName = prompt("Editar nome:", vendor.name);
                const newCategory = prompt(
                  "Editar categoria:",
                  vendor.category
                );
                const newEstimatedCost = prompt(
                  "Editar preço estimado:",
                  String(vendor.estimatedCost)
                );
                const newContractStatus = confirm("Contratar fornecedor?");
                if (newName && newCategory && newEstimatedCost !== null) {
                  handleEdit(
                    vendor.id,
                    newName,
                    newCategory,
                    Number(newEstimatedCost),
                    newContractStatus
                  );
                }
              }}
            >
              Editar
            </Button>
            <Button
              variant="outline"
              onClick={() => handleToggleContractStatus(vendor.id)}
            >
              {vendor.contractStatus ? "Desmarcar" : "Contratar"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
