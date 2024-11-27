export const AvailableSlot: React.FC<{ width?: number; height?: number }> = ({ width, height }) => {
    return (
        <div
            className="available-slot py-2 px-4 flex items-center justify-center"
            style={{ width, height }}
        >
            Available Slot
        </div>
    );
};

