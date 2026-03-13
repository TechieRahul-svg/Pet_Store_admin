import React from 'react';

const ReplyModal = ({ activeRequest, replyText, setReplyText, sendReply, closeReplyModal }) => {
  if (!activeRequest) return null;

  return (
    <div
      className="modal-overlay"
      id="reply-modal"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          closeReplyModal();
        }
      }}
    >
      <div className="modal-content glass fade-in">
        <div className="modal-header">
          <h3>Reply to Request</h3>
          <p id="reply-target" className="reply-target">
            Responding to {activeRequest.applicant} regarding {activeRequest.pet}
          </p>
        </div>
        <div className="modal-body">
          <textarea
            id="reply-text"
            placeholder="Type your message to the applicant..."
            value={replyText}
            onChange={(event) => setReplyText(event.target.value)}
          />
          <div className="modal-actions">
            <button type="button" className="btn-primary" id="send-reply" onClick={sendReply}>
              Send Reply
            </button>
            <button
              type="button"
              className="btn-action btn-view modal-cancel"
              id="close-modal"
              onClick={closeReplyModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
