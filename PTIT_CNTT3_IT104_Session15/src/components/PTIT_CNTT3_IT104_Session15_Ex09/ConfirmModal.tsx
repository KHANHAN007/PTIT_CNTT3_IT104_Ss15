import React from "react";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <div>
      <div>
        <h3>Xác nhận</h3>
        <p>
          <span>!</span>
          Bạn có xác nhận xóa công việc này không?
        </p>
        <div>
          <button onClick={onCancel}>Hủy</button>
          <button onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
