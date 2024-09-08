import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as Papa from 'papaparse';

export class CSVParser implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private context: ComponentFramework.Context<IInputs>;
    private notifyOutputChanged: () => void;
    private container: HTMLDivElement;
    private button: HTMLButtonElement;
    private fileInput: HTMLInputElement;
    private jsonOutput: string;

    constructor(){}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;
        this.container = container;

        this.button = document.createElement('button');
        this.button.className = 'primary-button';
        this.button.innerText = this.context.parameters.label.raw ?? 'Upload CSV';
        this.button.addEventListener('click', () => document.getElementById('fileInput')?.click());
        this.container.appendChild(this.button);

        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.id = 'fileInput';
        this.fileInput.addEventListener('change', this.handleFileUpload.bind(this));
        this.container.appendChild(this.fileInput);
    }


    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
    }

    public getOutputs(): IOutputs
    {
        return {
            value: this.jsonOutput
        };
    }

    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }

    private handleFileUpload (event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const csvData = reader.result as string;
                Papa.parse(csvData, {
                    header: true,
                    complete: (result) => {
                        console.log(result.data);
                        this.jsonOutput = JSON.stringify(result.data);
                        this.notifyOutputChanged();
                    }
                })
            }
            reader.readAsText(file);
        }
    }
}
