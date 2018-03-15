class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: Note.all.order(created_at: :desc)
  end

  def show
    render json: @note
  end

  def create
    note = Note.create(note_params)
    if note.save
      render json: note
    else
      render json: { errors: note.errors.full_messages.join(', ') }, status: 422
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors.full_messages.join(', ') }, status: 422
    end
  end

  def destroy
    @note.destroy
  end

  private 
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :color, :body, :image, :due)
    end
end
